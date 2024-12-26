import { Text, View, Image, Button } from "react-native";

const ItemDetail = ({ route }) => {
  const { name, price, image } = route.params;
  return (
    <View>
      <Image style={{ width: 300, height: 200 }} source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{price + " KD"}</Text>
      <Button title="Make an Offer"></Button>
    </View>
  );
};

export default ItemDetail;
