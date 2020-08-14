import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splashscreen from "./app/Screens/AuthScreens/Splashscreen";
import Login from "./app/Screens/AuthScreens/Login";
import Home from "./app/Screens/HomeScreens/Home";
import ResourceTimeSheet from "./app/Screens/HomeScreens/ResourceTimeSheet";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    // initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Splashscreen" component={Splashscreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Resource"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      options={{ headerShown: true }}
      name="Resource"
      component={ResourceTimeSheet}
    />
  </Stack.Navigator>
);

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ gestureEnabled: false, headerShown: false }}
        >
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
