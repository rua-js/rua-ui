import * as React from 'react'
import { AppRegistry } from 'react-native'
// import { persistStore, autoRehydrate } from 'redux-persist'

// 事件管理器

// dva
import { dvaLite } from 'rua-dva'

// 导入模型
import Router from './router'

// 加载事件回调

// 打包模型
const models = []

// 绑定dva
const app = dvaLite({
  models,
  initialState: {},
  // extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.warn('onError', e)
  },
})

// 启动
const App = app.start(<Router />)

AppRegistry.registerComponent('RuaUIDemo', () => App)

