import React, { useState } from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "D1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "D2",
    image: require("../assets/avatar.jpg"),
  },
];

function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "D2",
              image: require("../assets/avatar.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessageScreen;
