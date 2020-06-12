import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "./Icon";

import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Icon size={80} backgroundColor={item.color} name={item.icon}></Icon>
          <AppText>{item.label}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: "center",
  },
});
export default CategoryPickerItem;
