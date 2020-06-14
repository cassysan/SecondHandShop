import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    <Stack.Screen name="MyMessages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
