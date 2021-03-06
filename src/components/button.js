import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Button = ({ onPress }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={onPress}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#7C37A6",
    margin: 20,
    padding: 12,
    borderRadius: 10,
  },
  TouchableOpacityStyle: {
    width: "100%",
    justifyContent: "center", // for vertical
    alignItems: "center", // for horizontal
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
