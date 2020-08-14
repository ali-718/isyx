import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  LightGray,
  shadow,
  resourceCardHeading,
  resourceCardValue,
} from "../common/Theme";

export const BasicCard = (props) => (
  <View style={{ width: "100%", alignItems: "center" }}>
    <View
      style={{
        width: "95%",
        borderRadius: 10,
        backgroundColor: "white",
        ...shadow,
        padding: 10,
        paddingVertical: 20,
      }}
    >
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Date :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.date}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Legal Entity :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.legalEntity}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Project ID :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.projectId}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Project Name :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.projectName}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Customer Name :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.customerName}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Lead ID :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.leadID}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>WBS Task :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.wbsTask}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Category :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.category}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Resource Name :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.resourceName}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Description :</Text>
        </View>
        <View style={{ width: "60%" }}>
          {props.description?.length > 150 &&
          props.selectedRead !== props.currentkey ? (
            <>
              <Text style={resourceCardValue}>
                {props.description.slice(0, 150)}...
              </Text>
              <TouchableOpacity onPress={() => props.onReadmoreClick()}>
                <Text
                  style={{ textDecorationLine: "underline", color: "#0000CD" }}
                >
                  read more
                </Text>
              </TouchableOpacity>
            </>
          ) : props.selectedRead == props.currentkey ? (
            <>
              <Text style={resourceCardValue}>{props.description}</Text>
              <TouchableOpacity onPress={() => props.onReadlessClick()}>
                <Text
                  style={{ textDecorationLine: "underline", color: "#0000CD" }}
                >
                  read less
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={resourceCardValue}>{props.description}</Text>
          )}
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>Hours :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.hours}</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
        <View style={{ width: "40%" }}>
          <Text style={resourceCardHeading}>By :</Text>
        </View>
        <View style={{ width: "60%" }}>
          <Text style={resourceCardValue}>{props.approvedBy}</Text>
        </View>
      </View>
    </View>
  </View>
);
