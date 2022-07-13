import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../screens/homeScreen";
import {SearchScreen} from "../screens/searchScreen";
import {MyListScreen} from "../screens/myListScreen";
import { MoreScreens } from "./more.navigation";
import * as icons from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function MainNavigation () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search";
              } 
                else if (route.name === "MyList") {
                  iconName = focused ? "folder" : "folder";
              }
                else if (route.name === "More") {
                  iconName = focused ? "grid" : "grid";
              }
    
              return (<icons.Feather name={iconName} size={size} color={color} />);
            },
            tabBarActiveTintColor: "#fed130",
            tabBarInactiveTintColor: "white",
            tabBarStyle: { backgroundColor: "#202123", borderTopWidth:0},
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
          })}
          >
            <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="Search"
            component={SearchScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="MyList"
            component={MyListScreen}
            options={{headerShown : false}}/>
            <Tab.Screen 
            name="More"
            component={MoreScreens}
            options={{headerShown : false}}/>
        </Tab.Navigator>
    );
}