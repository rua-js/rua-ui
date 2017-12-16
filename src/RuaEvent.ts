import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
import EventEmitter from 'wolfy87-eventemitter'

export default class RuaEvent extends AbstractRuaPackage {

  public store: EventEmitter

  constructor() {
    super()
    this.saveStore(new EventEmitter())
  }

  public on(evt: string, callback: Function): Function {
    this.store.on(evt, callback)
    return () => {
      this.removeOne(evt, callback)
    }
  }

  public once(evt: string, callback: Function): Function {
    this.store.once(evt, callback)
    return () => {
      this.removeOne(evt, callback)
    }
  }

  public emit(evt: string | RegExp, ...args: any[]): RuaEvent {
    this.store.emit(evt, args)
    return this
  }

  public removeOne(evt: string | RegExp, callback: Function): RuaEvent {
    this.store.removeListener(evt, callback)
    return this
  }

  // todo: need full implementation of event emitter
}