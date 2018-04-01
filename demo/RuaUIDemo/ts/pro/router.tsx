// Third-party Dependency
import * as React from 'react'
import { Animated, BackHandler, Easing, Platform } from 'react-native'
import { addNavigationHelpers, NavigationActions, StackNavigator, TabBarBottom, TabNavigator, } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
  initializeListeners,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
// Root Navigator
import { default as AppNavigator } from './navigator'

// Helper
function getCurrentScreen(navigationState)
{
  if (!navigationState)
  {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes)
  {
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
class Router extends React.PureComponent<any, any>
{
  componentWillMount()
  {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentDidMount()
  {
    initializeListeners('root', this.props.router)
  }

  componentWillUnmount()
  {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () =>
  {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login')
    {
      return true
    }
    if (currentScreen !== 'Home')
    {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render()
  {
    const { dispatch, app, router } = this.props
    // if (app.loading) return <Loading />

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener,
    })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {})
{
  return AppNavigator.router.getStateForAction(action, state)
}

export default Router
