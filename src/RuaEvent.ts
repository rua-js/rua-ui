import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
import * as EventEmitter from 'wolfy87-eventemitter'
import * as _ from 'lodash'
import { MultiEvents } from './Types'

export default class RuaEvent extends AbstractRuaPackage {

  public store: EventEmitter

  constructor() {
    super()
    this.saveStore(new EventEmitter())
  }

  public on(evt: string, callback: Function): RuaEvent {
    this.store.on(evt, callback)
    return this
  }

  public once(evt: string, callback: Function): RuaEvent {
    this.store.once(evt, callback)
    return this
  }

  public emit(evt: string | RegExp | any, ...args: any[]): RuaEvent {
    this.store.emit(evt, args)
    return this
  }

  public removeOne(evt: string | RegExp | any, callback: Function): RuaEvent {
    this.store.removeListener(evt, callback)
    return this
  }

  private load(evts: MultiEvents): RuaEvent {
    this.store.addListeners(evts)
    return this
  }

  // todo: need full implementation of event emitter
}