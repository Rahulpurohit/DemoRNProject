import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from './container/SignIn';
import Home from './container/Home/';
import About from './container/About';
import {Icon} from 'native-base';
import colors from './color';

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

const HomeIcon = props => {
  return <Icon {...props} />;
};

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: () => {},
        tintColor: 'white',
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: () => {},
        tintColor: 'white',
      },
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;

          IconComponent = HomeIcon;
        } else if (routeName === 'About') {
          iconName = `code`;
        }

        // You can return any component that you like here!
        return <IconComponent style={styleTab(focused)} name={iconName} />;
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: colors.yet_another_color,
        tintColor: 'white',
      },
    },
  },
);

const styleTab = focused => ({
  color: focused ? 'white' : 'gray',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {App: SignedIn, Auth: SignedOut},
    {
      initialRouteName: 'Auth',
    },
  ),
);
export default AppContainer;
