const React = require("react-native");
const { Platform, Dimensions } = React;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default {
    layoutFix: {
        flex: 1,
    },
    navigation: {
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        width: '100%',
        borderBottomWidth: 0,
        borderColor: '#286090',
        backgroundColor: '#286090',
    },
    navigationTransparent: {
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: '100%',
        borderBottomWidth: 0,
    },
    actionBarLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 2,
    },
    actionBarMiddle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 6,
    },
    actionBarRight: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'flex-end',
    },
};