import React, { Component } from 'react';
import { StatusBar, Platform, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Text, View, Icon } from 'native-base';
import { connect } from "react-redux";
import dismissKeyboard from 'react-native-dismiss-keyboard';

import NavigationService from '@service/Navigation'
import Style from '@theme/Style';
import Styles from './Style';
import APIServices from '../../Service/APIServices';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp_code: '',
    };

    this.handleResData = this.handleResData.bind();
  }

  handleClickVerifyOTP = otpcode => e => {
    const { configuri, phonenumber } = this.props;
    e.preventDefault();
    dismissKeyboard();
    if (otpcode == '') {
      Alert.alert('Alert Message !', 'Please Input OTP Code');
      return;
    }
    APIServices.GetVerifyOTP(configuri, phonenumber, otpcode, this.handleResData);
  }

  handleResData = (results) => {
    if (results.status != 500) {
      this.setState({ otpcode: '' });
      Alert.alert('Alert Message !', results.message)
    } else {
      this.setState({ otpcode: '' });
      Alert.alert('Alert Message !', results.message)
    }
  }

  onChangeText = text => {
    this.setState({ otpcode: text })
  }

  render() {
    return (
      <Container style={Style.layoutFix} >
        <Header style={Style.navigation} >
          <StatusBar backgroundColor="#000" animated barStyle="light-content" />
          <View style={Style.actionBarLeft}>
            <TouchableOpacity onPress={() => { NavigationService.back() }} >
              <Icon name="chevron-left" type='MaterialCommunityIcons' style={Style.statusBarIcon} />
            </TouchableOpacity>
          </View>
          <View style={Style.actionBarMiddle} >
            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'VerifyOTP'}</Text>
          </View>
          <View style={Style.actionBarRight}>
            {/* <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Right'}</Text> */}
          </View>
        </Header>
        <Content>
          <View style={Styles.section}>
            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000", paddingVertical: 5 }}>{'Input OTP Code'}</Text>
            <View style={Styles.block}>
              <TextInput
                style={Styles.textInput}
                placeholder={'OTP Code'}
                placeholderTextColor={'#9c9c9c'}
                value={this.state.otp_code}
                onChangeText={this.onChangeText}
                keyboardType={'phone-pad'}
                maxLength={10} />
            </View>
            <TouchableOpacity style={Styles.btn} onPress={this.handleClickVerifyOTP(this.state.otp_code)} >
              <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000" }}>{'Get SMS OTP'}</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProp = state => {
  return {
    phonenumber: state.model.phonenumber,
  };
};

export default connect(mapStateToProp, null)(index);
