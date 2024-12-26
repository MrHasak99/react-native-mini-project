import { Text, Image, Button, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image style={{ width: 300, height: 200 }} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
      <Text>{item.price + " KD"}</Text>
      <Button
        title={item.name + " Details"}
        onPress={() =>
          navigation.navigate("ItemDetail", {
            name: item.name,
            price: item.price,
            image: item.image,
          })
        }
      ></Button>
    </ScrollView>
  );
};

export default Item;
