// Third-party Dependency
// import invariant from 'invariant'

// Self Dependency
import RuaEvent from './RuaEvent'

// Rua Core Dependency
import { packager } from 'rua-core/lib'

const eventInstance = (() => {
  if (packager.hasPackage('rua-event')) {
    return packager.getPackage('rua-event')
  }

  return packager.registerIfNotRegistered('rua-event', new RuaEvent())
})()


const event: RuaEvent = eventInstance

export {
  event,
}