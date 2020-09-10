import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import { Container, Content, Header, Footer } from 'native-base';

import Style from '@theme/Style';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export class index extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <View style={Style.actionBarLeft}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "black" }}>{'Left'}</Text>
                    </View>
                    <View style={Style.actionBarMiddle} >
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "black" }}>{'Get Token'}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "black" }}>{'Right'}</Text>
                    </View>
                </Header>
                <Content>
                    <SafeAreaView>
                        <StatusBar backgroundColor="#000" animated barStyle='dark-content' />
                        <Text> textInComponent </Text>
                    </SafeAreaView>
                </Content>
                <Footer>
                    <View style={Style.actionBarMiddle} >
                        <Text style={{ fontSize: 0.04 * viewportWidth, color: "black" }}>{'Get Token'}</Text>
                    </View>
                </Footer>
            </Container>
        )
    }
}

export default index
