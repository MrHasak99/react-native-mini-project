import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemDetail = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
