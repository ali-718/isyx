import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Splashscreen extends Component {
  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <Image
          style={{ width: "100%", flex: 1 }}
          source={require("../../../assets/splashnew.png")}
        />
      </View>
    );
  }
}
