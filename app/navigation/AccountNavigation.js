import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "../screens/MessagesScreen";
import ListingsScreen from "../screens/ListingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Stack = createStackNavigator();

const AccountNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    <Stack.Screen name="MyMessages" component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigation;
