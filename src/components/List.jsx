import React from "react";
import { FlatList, Text } from "react-native";

function List({ tasks }) {
    return <FlatList data={tasks} renderItem={({ item }) => <Text> - {item.text}</Text>} />;
}

export default List;
