import React, { Component } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";

export default class ResourceTimeSheet extends Component {
  state = {
    fromDate: "",
    toDate: "",
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ width: "50%" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text>From Date</Text>
              </View>
              <DatePicker
                style={{ width: "90%", marginTop: 20 }}
                date={this.state.fromDate}
                mode="date"
                placeholder="select date"
                format="MMMM Do YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => {
                  this.setState({ fromDate: date });
                }}
              />
            </View>

            <View
              style={{
                width: "50%",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text>To Date</Text>
              </View>
              <DatePicker
                style={{ width: "90%", marginTop: 20 }}
                date={this.state.toDate}
                mode="date"
                placeholder="select date"
                format="MMMM Do YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => {
                  this.setState({ toDate: date });
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
