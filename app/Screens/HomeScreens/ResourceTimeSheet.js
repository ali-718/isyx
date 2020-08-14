import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import { StandardButton } from "../../components/Buttons";
import { BasicCard } from "../../components/Cards";

const data = [
  {
    date: "20 July 2020",
    legalEntity: "1100",
    projectId: "DXB-16-0017",
    projectName: "AX IMPLEMENTATION - DAS HOLDINGS",
    customerName: "DAS Holdings",
    leadID: "LEAD-00001",
    wbsTask: "Project Planning Stage",
    category: "Sr. Specilist",
    resourceName: "Waquas Rahman  1060004",
    description:
      "This is just the test app, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    hours: "2",
    approvedBy: "Vishwanath",
  },
  {
    date: "20 July 2020",
    legalEntity: "1100",
    projectId: "DXB-16-0017",
    projectName: "ATOS Qatar LLC",
    customerName: "ATOS Qatar LLC",
    leadID: "LEAD-00001",
    wbsTask: "Project Planning Stage",
    category: "Sr. Specilist",
    resourceName: "Waquas Rahman  1060004",
    description:
      "This is just the test app, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    hours: "2",
    approvedBy: "Vishwanath",
  },
];

export default class ResourceTimeSheet extends Component {
  state = {
    fromDate: "",
    toDate: "",
    selectedRead: "",
  };

  selectForRead = (key) => {
    this.setState({ selectedRead: key });
  };

  onReadlessClick = () => {
    this.setState({ selectedRead: "" });
  };

  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          style={{ width: "100%", flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 10,
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
                  <Text style={{ fontSize: 12 }}>From Date</Text>
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
                  <Text style={{ fontSize: 12 }}>To Date</Text>
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

            <View
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 10,
                  flexDirection: "row",
                }}
              >
                <View style={{ width: "50%" }}>
                  <StandardButton
                    width={"90%"}
                    // Action={() => this.props.navigation.navigate("Home")}
                    text="Clear All"
                  />
                </View>
                <View style={{ width: "50%" }}>
                  <StandardButton
                    width={"90%"}
                    // Action={() => this.props.navigation.navigate("Home")}
                    text="Approve selected lines"
                  />
                </View>
              </View>

              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <View style={{ width: "50%" }}>
                  <StandardButton
                    width={"90%"}
                    // Action={() => this.props.navigation.navigate("Home")}
                    text="Submit "
                  />
                </View>
                <View style={{ width: "50%" }}>
                  <StandardButton
                    width={"90%"}
                    // Action={() => this.props.navigation.navigate("Home")}
                    text="Add Line"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 40, width: "100%", marginBottom: 20 }}>
            {data.map((item, i) => (
              <View key={i} style={{ width: "100%", marginTop: 30 }}>
                <BasicCard
                  onReadlessClick={() => this.onReadlessClick()}
                  onReadmoreClick={() => this.selectForRead(i)}
                  selectedRead={this.state.selectedRead}
                  currentkey={i}
                  date={item.date}
                  legalEntity={item.legalEntity}
                  projectId={item.projectId}
                  projectName={item.projectName}
                  customerName={item.customerName}
                  leadID={item.leadID}
                  wbsTask={item.wbsTask}
                  category={item.category}
                  resourceName={item.resourceName}
                  description={item.description}
                  hours={item.hours}
                  approvedBy={item.approvedBy}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
