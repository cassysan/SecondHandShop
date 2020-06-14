import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Screen from "../components/Screen.js";
import Icon from "../components/Icon.js";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors.js";

const items = [
  {
    id: 1,
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    title: "My Listings",
  },
  {
    id: 2,
    title: "My Messages",
    targetScreen: "MyMessages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function MyAccountScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="cassymyers"
          subTitle="cassymyers@gmail.com"
          image={require("../assets/avatar.jpg")}
          onPress={() => console.log(item)}
        />
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                onPress={() => navigation.navigate(item.targetScreen)}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  links: {
    backgroundColor: colors.white,
    flexDirection: "row",
    width: "100%",
  },
  text: {
    marginLeft: 10,
    alignSelf: "center",
    fontWeight: "500",
  },
});
export default MyAccountScreen;
