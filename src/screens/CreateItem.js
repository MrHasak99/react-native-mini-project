import { Text, ScrollView, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";

const CreateItem = () => {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  return (
    <ScrollView>
      <Image
        style={{ width: 300, height: 200 }}
        source={{
          uri: "https://www.digitaltrends.com/wp-content/uploads/2024/07/surface-laptop-7-02.jpg?p=1",
        }}
      />
      <Text>Name</Text>
      <TextInput
        value={nameValue}
        onChangeText={(name) => setNameValue(name)}
      />
      <Text>Price</Text>
      <TextInput
        value={priceValue}
        onChangeText={(price) => setPriceValue(price)}
      />
      <Button title="Post Item"></Button>
    </ScrollView>
  );
};

export default CreateItem;
