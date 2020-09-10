const React = require("react-native");
const { Platform, Dimensions } = React;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default {
    footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        backgroundColor: 'rgba(56, 64, 90, 1)',
        borderColor: 'rgba(56, 64, 90, 1)',
        paddingVertical: 10
    }
};