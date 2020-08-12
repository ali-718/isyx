import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { BasicTextInput } from "../../components/BasicTextInput";
import { StandardButton } from "../../components/Buttons";

export default class Login extends Component {
  state = {
    Email: "",
    Password: "",
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View style={{ width: "100%", flex: 0.6, alignItems: "center" }}>
          <View
            style={{
              width: "100%",
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/logo.png")}
              style={{ width: 200, height: 100 }}
            />

            <View style={{ width: "100%", alignItems: "center" }}>
              <BasicTextInput
                value={this.state.Email}
                setState={(val) => this.setState({ Email: val })}
                keyboardType="email-address"
                placeholder="Email"
              />
              <BasicTextInput
                value={this.state.Email}
                setState={(val) => this.setState({ Password: val })}
                keyboardType="email-address"
                placeholder="Passowrd"
                password
                marginTop={20}
              />

              <StandardButton
                Action={() => this.props.navigation.navigate("Home")}
                text="Login"
                marginTop={20}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
