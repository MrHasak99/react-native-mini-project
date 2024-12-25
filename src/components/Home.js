import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getAllItems } from "../apis/items";

const HomeScreen = () => {
  const { data } = useQuery({
    queryFn: getAllItems,
    queryKey: ["items"],
  });

  const itemList = data?.map((item) => <Item item={item} />);

  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Item Detail"
        onPress={() => navigation.navigate("Item Detail")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
