import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatButton from "./FlatButton";

const ColorBundle = ({ color, incFnc, dcrFnc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{color}</Text>
      <FlatButton
        backgColor={color.toLowerCase()}
        text={`Increase ${color}`}
        onPress={() => incFnc()}
      />
      <FlatButton
        backgColor={color.toLowerCase()}
        text={`Decrease ${color}`}
        onPress={() => dcrFnc()}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign:'center'
  },
});

export default ColorBundle;
