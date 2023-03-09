import { Text, View, StatusBar } from "react-native";
import React from "react";
import styled from "styled-components/native";

const statusbarHeight = StatusBar.currentHeight || 0;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Container = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding-horizontal: 26px;
    padding-top: ${statusbarHeight + 22}px;
    padding-bottom: 22px;
`;

const Date = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Day = styled.Text`
    text-align: left;
    font-size: 70px;

    color: #6272a4;
`;

const Wrapper = styled.View``;

const Month = styled.Text`
    text-align: left;
    font-size: 24px;
    color: #6272a4;
    margin-bottom: -4px;
`;

const Year = styled.Text`
    opacity: 1;
    font-size: 24px;

    color: #6272a4;
`;

const WeekDay = styled.Text`
    text-align: right;

    font-size: 24px;
    color: #6272a4;
`;

function Header() {
    const date = new window.Date();

    const [day, month, year, weekDay] = [
        date.getDate(),
        date.toLocaleString("en-us", { month: "short" }),
        date.getFullYear(),
        date.getDay(),
    ];
    return (
        <Container>
            <Date>
                <Day>{day}</Day>
                <Wrapper>
                    <Month>{month}</Month>
                    <Year>{year}</Year>
                </Wrapper>
            </Date>

            <WeekDay>{days[weekDay]}</WeekDay>
        </Container>
    );
}

export default Header;
