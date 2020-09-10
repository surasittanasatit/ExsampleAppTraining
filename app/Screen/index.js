import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import GetSmsOTP from './GetSmsOTP';
import VerifyOTP from './VerifyOTP';
import NavigationService from '@service/Navigation'

const AppNav = createStackNavigator(
  {
    GetSmsOTP: {
      screen: GetSmsOTP
    },
    VerifyOTP: {
      screen: VerifyOTP
    }
  },
  {
    headerMode: "none",
    initialRouteName: "GetSmsOTP",
    navigationOptions: {
      headerShown: false
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
