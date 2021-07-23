import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import EmailIcon from "react-native-vector-icons/AntDesign";
import PasswordIcon from "react-native-vector-icons/EvilIcons";
import { ImageIcon, Button, Input } from "../components";

export default class LoginScreen extends Component {
  onSignInButtonPressed = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.view}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.header}>
          <Icon name="chevron-with-circle-left" size={25} />
        </View>
        <Text style={styles.collection}>Collection</Text>
        <Text style={styles.details}>Enter your detail below</Text>
        <Text style={styles.userOrEmail}>Username or Email</Text>
        <Input
          icon={<EmailIcon name="mail" size={20} />}
          textPlaceHolder="Enter your E-mail or Username"
        />
        <View style={styles.rowBetweenPassAndForgetPass}>
          <Text style={styles.password}>Password</Text>
          <Text style={styles.forgetPass}>Forget password?</Text>
        </View>
        <Input
          icon={<PasswordIcon name="question" size={25} />}
          textPlaceHolder="Enter your password"
          checkSecure
        />
        <Button onPress={this.onSignInButtonPressed} />
        <View style={styles.rowBetweenIsaMemberAndSignUpNow}>
          <Text>Not a member? </Text>
          <Text style={styles.signUpNow}>Sign Up now</Text>
        </View>
        <Text style={styles.or}>Or</Text>
        <Text style={styles.signUpWith}>Sign Up with</Text>
        <View style={styles.imageIconsGroup}>
          <ImageIcon uri="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" />
          <ImageIcon uri="data:image/png;base64,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" />
          <ImageIcon uri="data:image/png;base64,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" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center", // for vertical
    alignItems: "flex-start", // for horizontal
    padding: 20,
  },
  view: {
    backgroundColor: "white",
    flex: 1, // height 100%  , wight 100%
  },
  collection: {
    textAlign: "center", // for horizontal
    fontSize: 22,
    fontWeight: "bold",
  },
  details: {
    textAlign: "center", // for horizontal
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },
  userOrEmail: {
    textAlign: "left", // for horizontal
    fontSize: 12,
    marginLeft: 20,
    marginTop: 30,
  },
  rowBetweenPassAndForgetPass: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  password: {
    textAlign: "left", // for horizontal
    fontSize: 12,
    marginLeft: 20,
  },
  forgetPass: {
    textAlign: "right", // for horizontal
    fontSize: 12,
    marginRight: 10,
  },
  rowBetweenIsaMemberAndSignUpNow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  or: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  signUpNow: {
    color: "blue",
    textDecorationLine: "underline",
  },
  signUpWith: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  imageIconsGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
