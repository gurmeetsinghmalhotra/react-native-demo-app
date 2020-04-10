import Config from './DebugConfig';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { name as appName } from './../../app.json';

// https://github.com/infinitered/reactotron for more options!
Reactotron
  .configure({ name: appName })
  .useReactNative()
  // register the redux-saga plugin so we can use the monitor in CreateStore.js
  .use(sagaPlugin())

if (Config.useReactotron) {
  // let's connect!
  Reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()
}

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron
