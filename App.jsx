import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";
import ProgressBar from "./src/components/ProgressBar";

const Container = styled.View`
    background-color: #f8f8f2;
    flex: 1;
`;

function App() {
    return (
        <Container>
            <Header />
            <ProgressBar />
        </Container>
    );
}

export default App;
