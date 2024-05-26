/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {theme, ThemeType} from './src/theme';
import {Routes} from './src/routes';

const App: React.FC = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <ThemeProvider theme={theme as ThemeType}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeProvider>
  </GestureHandlerRootView>
);

export default App;
