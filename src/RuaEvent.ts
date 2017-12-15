import { AbstractRuaPackage } from 'rua-core/lib/Abstractions'
import emitter from 'wolfy87-eventemitter'

class RuaEvent extends AbstractRuaPackage {
  /**
   * Original EventEmitter
   *
   * @type {EventEmitter}
   */
  public emitter = emitter

  constructor() {
    super()
  }

  public fire(event: string): void {

  }

  public on(event: string, callback: any): void {

  }

  public once(event: string, callback: any): void {

  }

  public removeAll(event?: string): boolean {
    return true
  }
}