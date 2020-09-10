const React = require("react-native");
const { Platform, Dimensions } = React;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default {
    section: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    block: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 0,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 5,
                    height: 5
                },
            },
        }),
    },
    textInput: {
        color: '#000',
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 0.045 * viewportWidth,
        borderRadius: 5,
        width: '100%',
    },
    btn: {
        marginTop: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: '#ffc107',
    }
};