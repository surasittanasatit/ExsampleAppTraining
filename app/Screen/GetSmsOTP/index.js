import React, { Component } from 'react';
import { StatusBar, Platform, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Text, View } from 'native-base';
import { connect } from "react-redux";
import dismissKeyboard from 'react-native-dismiss-keyboard';

import NavigationService from '@service/Navigation';
import { modelAction } from '../../Actions';

import Style from '@theme/Style';
import Styles from './Style';
import APIServices from '../../Service/APIServices';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //phone_number: '',
            focusDescriptionInput: false
        };

        this.handleResData = this.handleResData.bind();
    }

    componentDidMount() {
        // this.phonenumberInput.focus(); 
    }

    handleClickGetSmsOTP = phonenumber => e => {
        const { configuri } = this.props;
        e.preventDefault();
        if (phonenumber == '') {
            Alert.alert('Alert Message !', 'Please Input Telephone Number');
            return;
        }
        //NavigationService.navigate('VerifyOTP');
        dismissKeyboard();
        APIServices.GetOTPSMS(configuri, phonenumber, this.handleResData);
    }

    handleResData = (results) => {
        if (results.status != 500) {
            this.setState({ phone_number: '' });
            Alert.alert('Alert Message !', results.message)
            //NavigationService.navigate('VerifyOTP');
        } else {
            this.setState({ phone_number: '' });
            Alert.alert('Alert Message !', results.message)
        }
    }

    onChangeText = text => {
        // this.setState({ phone_number: text })
        this.props.setActionPhoneNumber(text);
    }

    onSubmitEditingText = e => {
        const { configuri, phonenumber } = this.props;
        if (phonenumber == '') {
            Alert.alert('Alert Message !', 'Please Input Telephone Number');
            return;
        }
        dismissKeyboard();
        APIServices.GetOTPSMS(configuri, phonenumber, this.handleResData);
    }

    render() {
        return (
            <Container style={Style.layoutFix} >
                <Header style={Style.navigation} >
                    <StatusBar backgroundColor="#000" animated barStyle="light-content" />
                    <View style={Style.actionBarLeft}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Left'}</Text>
                    </View>
                    <View style={Style.actionBarMiddle} >
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'SMS OTP'}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Right'}</Text>
                    </View>
                </Header>
                <Content>
                    <View style={Styles.section}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000", paddingVertical: 5 }}>{'Input Telephone Number'}</Text>
                        <View style={Styles.block}>
                            <TextInput
                                ref={(input) => { this.phonenumberInput = input; }}
                                //onSubmitEditing={this.onSubmitEditingText}
                                returnKeyType="done"
                                style={Styles.textInput}
                                placeholder={'Telephone Number'}
                                placeholderTextColor={'#9c9c9c'}
                                value={this.props.phonenumber} //this.state.phone_number
                                onChangeText={this.onChangeText}
                                keyboardType={'phone-pad'}
                                maxLength={10} />
                        </View>
                        <TouchableOpacity style={Styles.btn} onPress={this.handleClickGetSmsOTP(this.props.phonenumber)} >
                            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000" }}>{'Get SMS OTP'}</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapDispatchToProp = dispath => {
    return {
        setActionPhoneNumber: phonenumber => {
            dispath(modelAction.getActionPhoneNumber(phonenumber));
        },
    };
};

const mapStateToProp = state => {
    return {
        configuri: state.config.configuri,
        phonenumber: state.model.phonenumber,
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(index);


