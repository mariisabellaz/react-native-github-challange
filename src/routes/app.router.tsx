import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import {Intro} from '@screens/Intro';
import {Splash} from '@screens/Splash';
import {Login} from '@screens/Login';
import {AddUser} from '@screens/AddUser';
import {Owners} from '@screens/Owners';
import {Repositories} from '@screens/Repositories';

import {RepoModel} from '@contexts/models/Repositories';

type AppRoutes = {
  splash: undefined;
  intro: undefined;
  login: undefined;
  adduser: undefined;
  owners: undefined;
  repositories: {
    starredRepo: RepoModel[];
  };
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Screen name="splash" component={Splash} />
      <Screen
        name="intro"
        component={Intro}
        options={{gestureEnabled: false}}
      />
      <Screen name="login" component={Login} />
      <Screen name="owners" component={Owners} />
      <Screen name="adduser" component={AddUser} />
      <Screen name="repositories" component={Repositories} />
    </Navigator>
  );
}
