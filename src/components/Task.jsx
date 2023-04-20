import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding-horizontal: 10px;
    padding-vertical: 5px;
`;

const ButtonGroup = styled.View`
    flex-direction: row;
`;

const Button = styled.TouchableOpacity`
    padding: 5px;
`;

function Task({ task, markCompleteTask, deleteTask }) {
    return (
        <Container>
            <Text>{task.text}</Text>

            <ButtonGroup>
                <Button onPress={() => markCompleteTask(task.id)}>
                    <AntDesign name="check" size={24} color="green" />
                </Button>
                <Button onPress={() => deleteTask(task.id)}>
                    <AntDesign name="delete" size={24} color="red" />
                </Button>
            </ButtonGroup>
        </Container>
    );
}

export default Task;
const styles = StyleSheet.create({});
