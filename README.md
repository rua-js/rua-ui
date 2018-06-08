# Rua-UI
A mobile-first all platform unified ui kit

## Set Up On Web
Install dependencies
```
yarn add react-native-web babel-plugin-transform-decorators-legacy babel-plugin-transform-class-properties
```

Include packages that requires polyfill in your `.babelrc` file
```
{
  ...
  include: [
   'node_modules/rua',
   'node_modules/rua-ui',
   'node_modules/react-native-elements',
   'node_modules/react-native-platform-touchable',
   'node_modules/react-native-vector-icons',
  ]
  ...
}
```

## Check List

#### View
- [x] PaddedView
- [x] SpaceBetweenView
- [x] TouchableView