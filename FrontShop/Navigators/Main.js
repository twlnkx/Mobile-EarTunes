import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeNavigator from "./HomeNavigator";
// import CartNavigator from "./CartNavigator";
// import UserNavigator from "./UserNavigator";
// import AdminNavigator from "./AdminNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        KeyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator} 
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="home"
                style={{ position: "relative" }}
                color={color}
                size={30}
              />
            );
          }
        }}
      />

      <Tab.Screen
        name="Cart"
        component={HomeNavigator} 
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="shopping-cart"
                color={color}
                size={30}
              />
            );
          }
        }}
      />

      <Tab.Screen
        name="Admin"
        component={HomeNavigator} 
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="cog"
                color={color}
                size={30}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator} 
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="user"
                color={color}
                size={30}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  
  );
}

export default Main;
