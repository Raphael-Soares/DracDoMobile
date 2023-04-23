import { useState } from "react";
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
    margin-top: 22px;
    padding-horizontal: 26px;
`;

const InputWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    border-radius: 4px;

    border-width: 1px;
    border-color: #ddd;
    height: 50px;
    padding-left: 16px;
`;

const Input = styled.TextInput`
    color: #6272a4;

    font-size: 16px;
    width: 80%;
`;
const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    background-color: #6272a4;
`;

const Icon = styled(Ionicons)`
    color: #fff;
`;

function AddField({ addTask }) {
    const [inputText, setInputText] = useState("");

    function handleAddTask() {
        if (inputText.length !== 0) {
            addTask(inputText);
            setInputText("");
        }
    }

    return (
        <Container>
            <InputWrapper>
                <Input
                    placeholder="Add a new task"
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                />
                <Button onPress={handleAddTask}>
                    <Icon name="add" size={34} />
                </Button>
            </InputWrapper>
        </Container>
    );
}

export default AddField;
