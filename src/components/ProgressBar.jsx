import { StyleSheet, Text, View, Animated } from "react-native";
import { useEffect, useState, useMemo } from "react";
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

function ProgressBar({ tasks }) {
    const done = useMemo(() => {
        tasks.filter((task) => task.done == true);
    }, [tasks]);
    console.log(tasks);
    console.log(done);
    return (
        <Container>
            <Parent>
                <Child
                    style={{
                        width: "30%",
                    }}
                ></Child>
            </Parent>
        </Container>
    );
}

export default ProgressBar;
