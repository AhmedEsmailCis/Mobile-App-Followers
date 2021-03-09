import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// create Component
export default class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.peopleStyle}>People </Text>
        <View style={styles.textInput}>
          <Icon name={'search'} size={15} style={styles.iconStyle} />
          <TextInput
            onChangeText={this.props.onChangeText}
            style={styles.searchInput}
            placeholder="  Search"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    //justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    alignItems: 'center', //for horizontal
  },
  peopleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center', //for horizontal
    borderRadius: 8,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    width: '80%',
    paddingLeft: 5,
  },
  iconStyle: {
    color: 'grey',
    flex: 1,
  },
  searchInput: {flex: 15},
});
