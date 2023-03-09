import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    width: 100%;
    height: 24px;
    padding-horizontal: 26px;
`;

const Parent = styled.View`
    width: 100%;
    height: 24px;
    background-color: #6273a465;
    border-radius: 4px;
`;

const Child = styled.View`
    width: 0%;
    height: 100%;
    background-color: #50fa7b;
    border-radius: 4px;
    transition: width 0.5s ease;
`;

function ProgressBar() {
    return (
        <Container>
            <Parent>
                <Child
                    style={{
                        width: "50%",
                    }}
                ></Child>
            </Parent>
        </Container>
    );
}

export default ProgressBar;
