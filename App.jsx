import { FlatList, Text } from "react-native";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";
import ProgressBar from "./src/components/ProgressBar";
import Search from "./src/components/Search";
import AddField from "./src/components/AddField";
import Task from "./src/components/Task";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
    background-color: #f8f8f2;
    flex: 1;
`;

const List = styled.FlatList`
    margin-horizontal: 26px;
`;

function App() {
    const [tasks, setTasks] = useState([]);
    const [pending, setPending] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [search, setSearch] = useState("");

    function pendingMarked() {
        setPending(true);
        setCompleted(false);
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);

        setTasks(newTasks);
        syncTasks(newTasks);
    }

    function markCompleteTask(id) {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });

        setTasks(newTasks);
        syncTasks(newTasks);
    }

    function completedMarked() {
        setPending(false);
        setCompleted(true);
    }

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
        const updatedTasks = [...tasks, { id: Math.random(), text: task, done: false }];
        setTasks(updatedTasks);

        syncTasks(updatedTasks);
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    const pendingTasks = useMemo(() => {
        return tasks.filter((task) => !task.done);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        return tasks.filter((task) => task.done);
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        return tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
    }, [tasks, search]);

    const whichTasks = useMemo(() => {
        return search.length > 0 ? filteredTasks : pending ? pendingTasks : completedTasks;
    }, [pending, completed, pendingTasks, completedTasks, filteredTasks, search]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Container>
                <Header />
                <ProgressBar tasks={tasks} />
                <Search
                    search={search}
                    setSearch={setSearch}
                    pending={pending}
                    completed={completed}
                    pendingMarked={pendingMarked}
                    completedMarked={completedMarked}
                />
                <AddField addTask={addTask} />

                <List
                    data={whichTasks}
                    renderItem={({ item }) => (
                        <Task
                            task={item}
                            markCompleteTask={markCompleteTask}
                            deleteTask={deleteTask}
                        />
                    )}
                />
            </Container>
        </GestureHandlerRootView>
    );
}

export default App;
