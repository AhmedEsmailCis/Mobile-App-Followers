import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export const Input = ({ icon, textPlaceHolder, checkSecure }) => {
  return (
    <View style={styles.viewStyle}>
      {icon}
      <TextInput
        style={styles.inputStyle}
        placeholder={textPlaceHolder}
        secureTextEntry={checkSecure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 15,
    padding: 0,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  inputStyle: { width: "100%" },
});
