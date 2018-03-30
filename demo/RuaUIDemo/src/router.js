/**
 * ------------------------------------------------------------------
 * 依赖
 * ------------------------------------------------------------------
 */
import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Platform } from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

/**
 * ------------------------------------------------------------------
 * 导入页面
 * ------------------------------------------------------------------
 */
import { screens } from './configs'

/**
 * ------------------------------------------------------------------
 * 绑定路由
 * ------------------------------------------------------------------
 */

const HomeNavigator = TabNavigator(
  screens.home,
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#ed393a',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#f4f4f4',
        borderTopColor: '#e9e9e9',
        paddingBottom: 2,
      },
    },
  },
)
const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    ...screens.main,
  },
  {
    mode: 'card',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
)

const AppNavigator = StackNavigator(
  {
    Main: {
      screen: MainNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ...screens.app,
  },
  {
    // headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  },
)

/**
 * ------------------------------------------------------------------
 * 配置路由
 * ------------------------------------------------------------------
 */
function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const addListener = createReduxBoundAddListener('root')

@connect(({ app, router }) => ({ app, router }))
class Router extends React.PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentDidMount() {
    initializeListeners('root', this.props.router)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, app, router } = this.props
    // if (app.loading) return <Loading />

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener,
    })
    if (!navigation.state) {
      navigation.state = {}
    }
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default Router
