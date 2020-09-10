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
        backgroundColor: 'rgba(255, 255, 255, 0)',
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
    statusBarIcon: {
        color: '#FFF',
        fontSize: 0.09 * viewportWidth
    },
    barIcon: {
        color: '#FFF',
        fontSize: 0.08 * viewportWidth
    },
    /* Footer */
    footer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        backgroundColor: 'rgba(56, 64, 90, 1)',
        borderColor: 'rgba(56, 64, 90, 1)',
        paddingVertical: 10
    },
    fBtn: {
        flex: 1,
        alignItems: 'center'
    },
    fBtnActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconFtabActive: {
        fontSize: 0.08 * viewportWidth,
        color: '#FFFFFF'
    },
    fBtnIcon: {
        fontSize: 0.08 * viewportWidth,
        color: '#FFFFFF'
    },
    iconFtabBgActive: {
        fontSize: 0.09 * viewportWidth,
        color: '#FFFFFF',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 12,
        width: 70,
        height: 45,
        backgroundColor: 'rgba(56, 64, 90, 1)'
    },
};