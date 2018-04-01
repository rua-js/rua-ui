// Third-party dependency
import { Animated, Easing, Platform } from 'react-native'
import { addNavigationHelpers, NavigationActions, StackNavigator, TabBarBottom, TabNavigator, } from 'react-navigation'
// Transition animation
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
// Screens
import { screens } from '../configs'

// Tabs
const tabNavigator = TabNavigator(
  screens.tabs,
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

// Pages
const pageNavigator = StackNavigator(
  {
    HomeNavigator: { screen: tabNavigator },
    ...screens.pages,
  },
  {
    mode: 'card',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
)

// Modals
const AppNavigator = StackNavigator(
  {
    Main: {
      screen: pageNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ...screens.modals,
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
      screenInterpolator: sceneProps =>
      {
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

export default AppNavigator
