import React, { Component } from "react";
import { TextInput } from "react-native";

export const BasicTextInput = (props) => (
  <TextInput
    secureTextEntry={props.password}
    autoCapitalize="none"
    keyboardType={props.keyboardType}
    onChangeText={(val) => props.setState(val)}
    value={props.value}
    style={{
      borderWidth: 1,
      width: "80%",
      borderRadius: 5,
      backgroundColor: "rgba(220,220,220,0.3)",
      marginTop: props.marginTop || 10,
      height: 50,
      fontSize: 20,
      paddingLeft: 10,
    }}
    placeholder={props.placeholder}
    placeholderTextColor="#A9A9A9"
  />
);
