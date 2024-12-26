import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image style={{ width: 300, height: 200 }} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
      <Text>{item.price + " KD"}</Text>
      <Button
        title={item.name + " Details"}
        onPress={() =>
          navigation.navigate("Item Detail", {
            name: item.name,
            price: item.price,
            image: item.image,
          })
        }
      ></Button>
    </View>
  );
};

export default Item;
