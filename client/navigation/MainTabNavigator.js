import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeStack from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChattingScreen from "../screens/ChattingScreen";

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const ProfileStack = createStackNavigator({
  Links: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-link"}
    />
  )
};

const ChattingStack = createStackNavigator({
  Chatting: ChattingScreen
});

ChattingStack.navigationOptions = {
  tabBarLabel: "Chatting",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatboxes" : "md-options"}
    />
  )
};

export default createBottomTabNavigator(
  {
    ProfileStack,
    HomeStack,
    ChattingStack
  },
  {
    initialRouteName: "HomeStack"
  }
);
