import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// create Component
export default class UserDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      followed: props.fStatus,
    };
  }
  following = (indx) => {
    this.setState({
      followed: !indx,
    });
  };

  render() {
    const setText = () =>
      this.state.followed === true ? 'FOLLOWING' : 'Followed Back';
    const setBackgroundColor = (idx) => (idx === true ? '#7C37A6' : 'white');
    const setTextColor = (idx) => (idx === true ? 'white' : '#7C37A6');
    return (
      <View style={styles.groupingView}>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: this.props.imageSource,
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{this.props.name}</Text>
          <Text style={styles.emailText}>{this.props.email}</Text>
        </View>
        <View
          style={[
            styles.followButton,
            {backgroundColor: setBackgroundColor(this.state.followed)},
          ]}>
          <TouchableOpacity
            onPress={() => {
              this.following(this.state.followed);
            }}>
            <Text
              style={[
                styles.followText,
                {color: setTextColor(this.state.followed)},
              ]}>
              {setText()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  groupingView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center', //for horizontal
  },
  followButton: {
    borderColor: '#7C37A6',
    borderRadius: 10,
    borderWidth: 1.1,
    padding: 10,
    paddingRight: 10,
    width: 120,
    alignItems: 'center',
  },
  followText: {
    color: '#7C37A6',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 15,
  },
  emailText: {
    fontSize: 11,
    color: 'grey',
    marginTop: 7,
  },
  imageView: {
    overflow: 'hidden',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  detailsContainer: {marginLeft: 5, marginRight: 10, width: 140},
});
