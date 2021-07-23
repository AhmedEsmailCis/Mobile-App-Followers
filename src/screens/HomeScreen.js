import React, { Component } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Axios from "axios";
import { HomeHeader, UserDetails } from "../components";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataOfUser: [],
      loader: true,
      dataAfterSearch: [],
      searchCheck: false,
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList = async () => {
    const request = await Axios.get("https://reqres.in/api/users");
    this.setState({ dataOfUser: request.data.data, loader: false });
  };

  searchLoadList = (name) => {
    if (name === "") {
      this.setState({ searchCheck: false });
    } else {
      this.setState({ searchCheck: true });
    }
    const searchResult = [];
    const { dataOfUser } = this.state;
    for (let index = 0; index < dataOfUser.length; index++) {
      if (
        dataOfUser[index].first_name.includes(name) ||
        dataOfUser[index].last_name.includes(name)
      ) {
        searchResult.push(dataOfUser[index]);
      }
    }
    this.setState({ dataAfterSearch: searchResult });
  };

  _keyExtractor = (item, _) => item.id.toString();

  render() {
    return (
      <View style={styles.homeViewStyle}>
        <HomeHeader onChangeText={this.searchLoadList} />
        {this.state.loader ? (
          <View style={styles.loaderStyle}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : null}

        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.searchCheck ? this.state.dataAfterSearch : this.state.dataOfUser}
          renderItem={({ item }) => (
            <UserDetails
              key={item.id}
              name={`${item.first_name}, ${item.last_name}`}
              email={item.email}
              imageSource={item.avatar}
              fStatus={false}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loaderStyle: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  homeViewStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
