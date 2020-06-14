import React from "react";
import { View, Image, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";
function ListingDetails({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.subTitle}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/avatar.jpg")}
          title="Bella Fradeed"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 50,
  },
});
export default ListingDetails;
