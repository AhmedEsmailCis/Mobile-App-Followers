import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// create Component
const ImageIcon = (props) => {
  return (
    <View style={styles.viewButton}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Image
          source={{
            uri: props.uri,
          }}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ImageIcon;
const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center', // for vertical
    alignItems: 'center', //for horizontal
  },
  viewButton: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    flexGrow: 0,
    margin: 5,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
