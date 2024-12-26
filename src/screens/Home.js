import { ScrollView } from "react-native";
import React from "react";
import Item from "../components/Item";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Teddy Bear",
      price: 5,
      image:
        "https://www.bearsforhumanity.com/cdn/shop/files/IMG_1792copy.jpg?v=1696342413",
    },
    {
      id: 2,
      name: "Sports Car",
      price: 4500,
      image:
        "https://www.velocityrestorations.com/assets/media/553r-dark-green-muscle-car-768x366.webp",
    },
    {
      id: 3,
      name: "Old Books",
      price: 15,
      image: "https://i.ebayimg.com/images/g/2pkAAOSwv9hW2ds0/s-l1200.jpg",
    },
  ];

  const itemList = data.map((item) => <Item key={item.id} item={item} />);

  return <ScrollView>{itemList}</ScrollView>;
};

export default Home;
