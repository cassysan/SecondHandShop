import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ImageBackground,
  ImageBackgroundComponent,
} from "react-native";

import Screen from "./app/components/Screen";

import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable Image Library Permissions");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
