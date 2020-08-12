import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ThemeColor } from "../../common/Theme";

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 0.5,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "80%",
              borderRadius: 10,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: ThemeColor,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Resource Time Sheet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "80%",
              borderRadius: 10,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: ThemeColor,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Approve Time Sheet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
