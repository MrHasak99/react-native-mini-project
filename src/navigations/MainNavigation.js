import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../components/Home";
import ItemDetail from "../components/ItemDetail";
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Item Detail" component={ItemDetail} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
