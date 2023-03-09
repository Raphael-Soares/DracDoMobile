import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";
import ProgressBar from "./src/components/ProgressBar";
import Search from "./src/components/Search";
import AddField from "./src/components/AddField";

const Container = styled.View`
    background-color: #f8f8f2;
    flex: 1;
`;

function App() {
    return (
        <Container>
            <Header />
            <ProgressBar />
            <Search />
            <AddField />
        </Container>
    );
}

export default App;
