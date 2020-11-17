/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const App: () => React$Node = () => {
  return (
    <>
      <View style={{
          paddingTop: getStatusBarHeight(true) }}></View>
      <WebView style={{  height: '100%', width: '100%' }} source={{ uri: 'https://spacestock.com/' }} />
    </>
  );
};
export default App;
