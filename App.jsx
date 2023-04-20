import { FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";
import ProgressBar from "./src/components/ProgressBar";
import Search from "./src/components/Search";
import AddField from "./src/components/AddField";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
    background-color: #f8f8f2;
    flex: 1;
`;

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    async function getTasks() {
        try {
            const response = await AsyncStorage.getItem("tasks");
            if (response != null) {
                setTasks(JSON.parse(response));
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function syncTasks(tasks) {
        try {
            await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (err) {
            console.log(err);
        }
    }

    function addTask(task) {
        const updatedTasks = [...tasks, { id: Math.random(), text: task, completed: false }];
        setTasks(updatedTasks);

        syncTasks(updatedTasks);
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <Container>
            <Header />
            <ProgressBar />
            <Search />
            <AddField addTask={addTask} />

            <FlatList data={tasks} renderItem={({ item }) => <Text> - {item.text}</Text>} />
        </Container>
    );
}

export default App;
