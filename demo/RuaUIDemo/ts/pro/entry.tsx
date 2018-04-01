/**
 * Library Dependency
 */
import * as React from 'react'
import { AppRegistry } from 'react-native'

import { dvaLite } from 'rua-dva'
import { default as Router } from './router'

import router from './routerModel'

const models = [
  router,
]

/**
 * Setup dva
 */
const app = dvaLite({
  models,
  initialState: {},
  // extraEnhancers: [autoRehydrate()],
  onError(e: any) {
    console.warn('onError', e)
  },
})

/**
 * Start Dva
 */
const App = app.start(<Router />)

/**
 * Mount React
 */
AppRegistry.registerComponent('RuaUIDemo', () => App)
