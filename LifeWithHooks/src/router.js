import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from './container/SignIn';
import Home from './container/Home/';
import About from './container/About';

export const SignedOut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      title: 'Sign In',
      headerVisible: false,
    },
  },
);

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Profile: {
      screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
    },
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {App: SignedIn, Auth: SignedOut},
    {
      initialRouteName: 'Auth',
    },
  ),
);
export default AppContainer;
