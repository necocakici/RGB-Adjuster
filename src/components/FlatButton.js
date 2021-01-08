import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const FlatButton = ({ text, onPress, backgColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: backgColor }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal:10,
    marginVertical: 2,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
    textAlign:'center'
  },
});

export default FlatButton;
