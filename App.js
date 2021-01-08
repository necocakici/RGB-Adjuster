import React, { useState } from "react";
import {
  View,
  Pressable,
  ScrollView,
  Alert,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import ColorBundle from "./src/components/ColorBundle";
import FlatButton from "./src/components/FlatButton";

const App = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  const [increment, setIncrement] = useState(15);

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputText}>Increment or Decrement:</Text>
        <TextInput
          onChangeText={(text) => {
            setIncrement(Number(text));
          }}
          placeholder="Value"
          value={increment.toString()}
        />
      </View>

      <ColorBundle
        color="Red"
        incFnc={
          color.red < 255
            ? () => setColor({ ...color, red: color.red + increment })
            : () => setColor({ ...color, red: 255 })
        }
        dcrFnc={
          color.red > 0
            ? () => setColor({ ...color, red: color.red - increment })
            : () => setColor({ ...color, red: 0 })
        }
      />
      <ColorBundle
        color="Green"
        incFnc={
          color.green < 255
            ? () => setColor({ ...color, green: color.green + increment })
            : () => setColor({ ...color, green: 255 })
        }
        dcrFnc={
          color.green > 0
            ? () => setColor({ ...color, green: color.green - increment })
            : () => setColor({ ...color, green: 0 })
        }
      />
      <ColorBundle
        color="Blue"
        incFnc={
          color.blue < 255
            ? () => setColor({ ...color, blue: color.blue + increment })
            : () => setColor({ ...color, blue: 255 })
        }
        dcrFnc={
          color.red > 0
            ? () => setColor({ ...color, blue: color.blue - increment })
            : () => setColor({ ...color, blue: 0 })
        }
      />
      <Pressable
        onLongPress={() =>
          Alert.alert(`RGB ${color.red},${color.green},${color.blue} `)
        }
      >
        <View
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
            marginVertical: 15,
          }}
        />
      </Pressable>

      <FlatButton
        backgColor={"purple"}
        text={`Reset!`}
        onPress={() => {
          setColor({ red: 0, green: 0, blue: 0 });
          setIncrement(0);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 15,
    textAlign: "center",
  },
});

export default App;
