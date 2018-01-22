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

  /**
   * Adds a listener function to the specified event.
   *
   * @param {string | RegExp} event
   * @param {Function} callback
   * @returns {RuaEvent}
   */
  public on(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.on(event, callback)
    return this
  }

  /**
   * Adds a once listener function to the specified event.
   * It will be automatically removed after its first execution.
   *
   * @param {string | RegExp} event
   * @param {Function} callback
   * @returns {RuaEvent}
   */
  public once(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.once(event, callback)
    return this
  }

  /**
   * Emits an event of your choice.
   *
   * @param {string | RegExp} event
   * @param args
   * @returns {RuaEvent}
   */
  public emit(event: string | RegExp, ...args: any[]): RuaEvent {
    // @ts-ignore: no error here
    this.store.emit(event, args)
    return this
  }

  /**
   * Removes a listener function from the specified event.
   *
   * @param {string | RegExp} event
   * @param {Function} callback
   * @returns {RuaEvent}
   */
  public removeOne(event: string | RegExp, callback: Function): RuaEvent {
    // @ts-ignore: no error here
    this.store.removeListener(event, callback)
    return this
  }

  /**
   * Removes all listeners.
   *
   * @returns {RuaEvent}
   */
  public removeAll(): RuaEvent {
    this.store.removeAllListeners()
    return this
  }

  /**
   * Gets all listeners.
   *
   * @returns {AnyObject}
   */
  public getAll(): AnyObject {
    return this.get(/./)
  }

  /**
   * Returns the listener array for the specified event. (if string is given)
   * Returns listeners object for the specified event. (if RegExp is given)
   *
   * @param {string | RegExp} event
   * @returns {AnyObject | Function[]}
   */
  public get(event: string | RegExp ): AnyObject | Function[] {
    // @ts-ignore: no error here
    return this.store.getListeners(event)
  }

  /**
   * Load event listener from a event object
   *
   * @param {MultipleEvents} events
   * @returns {RuaEvent}
   */
  public load(events: MultiEvents): RuaEvent {
    this.store.addListeners(events)
    return this
  }

  // todo: need full implementation of event emitter
}