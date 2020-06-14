import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetails from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingsDetails"
      component={ListingDetails}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default ListingsNavigator;
