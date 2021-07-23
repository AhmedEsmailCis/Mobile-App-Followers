import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const HomeHeader = ({ onChangeText }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.peopleStyle}>People </Text>
      <View style={styles.textInput}>
        <Icon name="search" size={15} style={styles.iconStyle} />
        <TextInput onChangeText={onChangeText} style={styles.searchInput} placeholder="  Search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    alignItems: "center", // for horizontal
  },
  peopleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center", // for horizontal
    borderRadius: 8,
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    width: "80%",
    paddingLeft: 5,
  },
  iconStyle: {
    color: "grey",
    flex: 1,
  },
  searchInput: { flex: 15 },
});
