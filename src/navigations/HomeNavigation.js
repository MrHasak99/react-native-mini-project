import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/Home";
import ItemDetail from "../components/ItemDetail";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Item Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
