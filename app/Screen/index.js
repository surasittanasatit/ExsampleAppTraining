import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Home';
import GetSmsOTP from './GetSmsOTP';
import VerifyOTP from './VerifyOTP';
import GetToken from './GetToken';
import SamplePage1 from './Sample1';

import NavigationService from '@service/Navigation'

const AppNav = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    GetSmsOTP: {
      screen: GetSmsOTP,
    },
    VerifyOTP: {
      screen: VerifyOTP,
    },
    GetToken: {
      screen: GetToken
    },
    SamplePage1:{
      screen : SamplePage1
    }
  },
  {
    headerMode: "none",
    initialRouteName: "GetToken",
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false
    }
  }
)

const AppContainer = createAppContainer(AppNav);

export default class App extends Component {
  render() {
    return (
      <AppContainer ref={(r) => { NavigationService.setTopLevelNavigator(r) }} />
    );
  }
}
