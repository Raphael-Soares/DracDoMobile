import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {} from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding-horizontal: 10px;
    padding-vertical: 10px;

    border-radius: 5px;

    background-color: #6273a425;
    z-index: 99;
`;

const ButtonGroup = styled.View`
    flex-direction: row;
`;

const Button = styled.TouchableOpacity`
    padding: 5px;
`;

function Task({ task, markCompleteTask, deleteTask }) {
    function rightAction() {
        return (
            <ButtonGroup>
                <Button onPress={() => markCompleteTask(task.id)}>
                    {!task.done ? (
                        <MaterialIcons name="done" size={24} color="green" />
                    ) : (
                        <MaterialIcons name="remove-done" size={24} color="green" />
                    )}
                </Button>
                <Button onPress={() => deleteTask(task.id)}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </Button>
            </ButtonGroup>
        );
    }
    return (
        <Swipeable renderRightActions={rightAction}>
            <Container>
                <Text>{task.text}</Text>
            </Container>
        </Swipeable>
    );
}

export default Task;
const styles = StyleSheet.create({});
