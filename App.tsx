/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {theme, ThemeType} from './src/theme';
import {Routes} from './src/routes';
import './src/utils/config/reactotron';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme as ThemeType}>
      <StatusBar barStyle="dark-content" translucent />
      <GestureHandlerRootView style={{flex: 1}}>
        <Routes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
