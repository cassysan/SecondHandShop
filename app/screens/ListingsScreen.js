import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";

const initialListings = [
  {
    id: 1,
    title: "Red Jacket",
    subTitle: "$100",
    image: require("../assets/redjacket.jpeg"),
  },
  {
    id: 2,
    title: "Long Pants",
    subTitle: "$100",
    image: require("../assets/chair.jpg"),
  },
];
function ListingsScreen({ navigation }) {
  return (
    <Screen>
      <FlatList
        style={styles.card}
        data={initialListings}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("ListingsDetails", item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
});
export default ListingsScreen;
