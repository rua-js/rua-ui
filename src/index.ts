// Third-party Dependency

// Self Dependency
import RuaEvent from './RuaEvent'

// Rua Core Dependency
import { packager } from 'rua-core/lib'

// @ts-ignore: subclass
const eventInstance: RuaEvent = packager.registerIfNotRegistered('rua-event', new RuaEvent())

export const event: RuaEvent = eventInstance
