import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';

import {AppRoutes} from './app.router';
import {GithubProvider} from '@contexts/github.context';
import {TagsProvider} from '@contexts/tags.context';

export function Routes() {
  const theme = useTheme();

  const defaultTheme = DefaultTheme;
  defaultTheme.colors.background = theme.colors.background.white;

  return (
    <GithubProvider>
      <TagsProvider>
        <NavigationContainer theme={defaultTheme}>
          <AppRoutes />
        </NavigationContainer>
      </TagsProvider>
    </GithubProvider>
  );
}
