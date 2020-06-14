import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";

import MyAccountScreen from "../screens/MyAccountScreen";

import colors from "../config/colors";
import ListingsNavigator from "./FeedNavigator";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      inactiveBackgroundColor: colors.lightGray,
      inactiveTintColor: colors.mediumGray,
    }}
  >
    <Tab.Screen name="Feed" component={ListingsNavigator} options={{}} />
    <Tab.Screen name="NewItem" component={ListingEditScreen} options={{}} />
    <Tab.Screen name="Account" component={AccountNavigation} options={{}} />
  </Tab.Navigator>
);

export default AppNavigator;
