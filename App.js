import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeNavigation from "./src/navigations/HomeNavigation";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
