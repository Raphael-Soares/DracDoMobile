import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";

const Container = styled.View`
    background-color: #f8f8f2;
    flex: 1;
`;

function App() {
    return (
        <Container>
            <Header />
        </Container>
    );
}

export default App;
