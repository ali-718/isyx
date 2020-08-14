import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeColor } from "../common/Theme";

export const StandardButton = (props) => (
  <TouchableOpacity
    onPress={() => props.Action()}
    style={{
      backgroundColor: ThemeColor,
      width: props.width || "80%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginTop: props.marginTop || 10,
      marginBottom: 10,
    }}
  >
    <Text style={{ color: "white", fontWeight: "bold" }}>{props.text}</Text>
  </TouchableOpacity>
);
