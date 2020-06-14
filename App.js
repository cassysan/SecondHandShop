import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsScreen from "./app/screens/ListingsScreen";
import ListingsDetails from "./app/screens/ListingDetailsScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import colors from "./app/config/colors";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      inactiveBackgroundColor: colors.lightGray,
      inactiveTintColor: colors.mediumGray,
    }}
  >
    <Tab.Screen name="Feed" component={ListingsScreen} options={{}} />
    <Tab.Screen name="NewItem" component={ListingEditScreen} options={{}} />
    <Tab.Screen name="Account" component={MyAccountScreen} options={{}} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
