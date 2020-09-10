import React, { Component } from 'react';
import { StatusBar, Platform, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Text, View, Footer, Icon } from 'native-base';
import { connect } from "react-redux";
import dismissKeyboard from 'react-native-dismiss-keyboard';

import NavigationService from '@service/Navigation';

import Style from '@theme/Style';
import Styles from './Style';
import APIServices from '../../Service/APIServices';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClickLogOut = e => {
    NavigationService.resetNavigate();
  }

  render() {
    return (
      <Container style={Style.layoutFix} >
        <Header style={Style.navigation} >
          <StatusBar backgroundColor="#000" animated barStyle="light-content" />
          <View style={Style.actionBarLeft}>
            {/* <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Left'}</Text> */}
          </View>
          <View style={Style.actionBarMiddle} >
            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Home Page'}</Text>
          </View>
          <View style={Style.actionBarRight}>
            <TouchableOpacity onPress={this.onClickLogOut} >
              <Icon name="logout" type='MaterialCommunityIcons' style={[Style.statusBarIcon, { fontSize: 0.06 * viewportWidth }]} />
            </TouchableOpacity>
          </View>
        </Header>
        <Content>
          <View style={Styles.section}>
            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{this.props.token}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProp = state => {
  return {
    token: state.model.token,
  };
};

export default connect(mapStateToProp, null)(index);


