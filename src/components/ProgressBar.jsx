import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useMemo } from "react";
import styled from "styled-components/native";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
} from "react-native-reanimated";

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
    height: 100%;
    background-color: #50fa7b;
    border-radius: 4px;
`;

function ProgressBar({ tasks }) {
    const done = useMemo(() => {
        return tasks.filter((task) => task.done);
    }, [tasks]);

    const donePercent = useSharedValue(0);

    useEffect(() => {
        donePercent.value = done.length / tasks.length;
    }, [done, tasks, donePercent]);

    const progressStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(`${donePercent.value * 100}%`),
        };
    });

    return (
        <Container>
            <Parent>
                <Animated.View style={[StyleSheet.absoluteFill, progressStyle]}>
                    <Child />
                </Animated.View>
            </Parent>
        </Container>
    );
}

export default ProgressBar;
