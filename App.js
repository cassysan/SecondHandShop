import React, { useEffect, useState } from "react";
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
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleRemove = (uri) => {
    setImageUris([imageUris.filter((imageUri) => imageUri !== uri)]);
  };
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  return (
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
  );
}
