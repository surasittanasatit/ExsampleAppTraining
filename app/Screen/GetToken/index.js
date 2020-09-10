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
            userName: '',
            passWord: '',
        };

    }

    onChangeTextUser = text => {
        this.setState({ userName: text })
    }

    onChangeTextPassword = text => {
        this.setState({ passWord: text })
    }

    onClickGet = (username, pasword) => e => {
        console.log(username + ',' + pasword);
        NavigationService.navigate('Home');
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
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Get Token'}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                        {/* <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF" }}>{'Right'}</Text> */}
                    </View>
                </Header>
                <Content>
                    <View style={Styles.section}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000", paddingVertical: 5 }}>{'Username'}</Text>
                        <View style={Styles.block}>
                            <TextInput
                                returnKeyType="next"
                                onSubmitEditing={() => { this.passwordInput.focus() }}
                                style={Styles.textInput}
                                placeholder={'Username'}
                                placeholderTextColor={'#9c9c9c'}
                                value={this.state.userName}
                                onChangeText={this.onChangeTextUser}
                                keyboardType={'default'}
                                maxLength={10} />
                        </View>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "#000000", paddingVertical: 5 }}>{'Password'}</Text>
                        <View style={Styles.block}>
                            <TextInput
                                ref={(input) => { this.passwordInput = input; }}
                                returnKeyType="done"
                                style={Styles.textInput}
                                placeholder={'Password'}
                                placeholderTextColor={'#9c9c9c'}
                                value={this.state.passWord}
                                onChangeText={this.onChangeTextPassword}
                                keyboardType={'default'}
                                maxLength={10} />
                        </View>
                        <TouchableOpacity style={Styles.btn} onPress={this.onClickGet(this.state.userName, this.state.passWord)} >
                            <Text style={{ fontSize: 0.04 * viewportWidth, color: "#FFFFFF", fontWeight: 'bold' }}>{'Get'.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapDispatchToProp = dispath => {
    return {
        setActionToken: token => {
            dispath(modelAction.getActionToken(token));
        },
    };
};

const mapStateToProp = state => {
    return {
        configuri: state.config.configuri,
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(index);


