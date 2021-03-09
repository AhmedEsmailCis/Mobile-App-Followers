import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
// create Component
const Input = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.icon}
      <TextInput
        style={styles.inputStyle}
        placeholder={props.textPlaceHolder}
        secureTextEntry={props.checkSecure}
      />
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 15,
    padding: 0,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  inputStyle: {width: '100%'},
});
