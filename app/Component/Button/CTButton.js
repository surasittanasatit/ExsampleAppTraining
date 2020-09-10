import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform, Dimensions } from "react-native";
import { Pressable } from "react-native";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const DemoButton = ({ style, labelStyle, label, onPress }) => (
  <TouchableOpacity activeOpacity={0.75} style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonLabel, labelStyle]}>{label}</Text>
  </TouchableOpacity>
);

export default DemoButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "#286090",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 6,
    overflow: "hidden",
    marginTop: -5
  },
  buttonLabel: {
    fontFamily: "THSarabunNew-Bold",
    fontSize: Platform.isPad ? 0.045 * viewportWidth : 0.06 * viewportWidth,
    textAlign: "center",
    color: "#fff",
  },
});