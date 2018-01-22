import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
// @ts-ignore: import problem
import * as EventEmitter from 'wolfy87-eventemitter'
import { MultiEvents } from './Types'
import { AnyObject } from 'rua-core/lib/Types'

export default class RuaEvent extends AbstractRuaPackage {

  public store: EventEmitter

  constructor() {
    super()
    this.saveStore(new EventEmitter())
    this.booted = true
  }

  public on(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.on(event, callback)
    return this
  }

  public once(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.once(event, callback)
    return this
  }

  public emit(event: string | RegExp, ...args: any[]): RuaEvent {
    // @ts-ignore: no error here
    this.store.emit(event, args)
    return this
  }

  public removeOne(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.removeListener(event, callback)
    return this
  }

  public getAll(): AnyObject {
    return this.get(/./)
  }

  public get(event: string | RegExp ): AnyObject | Function[] {
    // @ts-ignore: no error here
    return this.store.getListeners(event)
  }

  public load(events: MultiEvents): RuaEvent {
    this.store.addListeners(events)
    return this
  }

  // todo: need full implementation of event emitter
}