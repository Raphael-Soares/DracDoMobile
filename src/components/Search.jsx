import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import React from "react";
import styled from "styled-components/native";

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
    padding-horizontal: 16px;
    padding-vertical: 8px;

    border-width: 1px;
    border-color: #ddd;
`;

const Input = styled.TextInput`
    color: #6272a4;
    font-size: 20px;
    width: 80%;
`;

const Icon = styled(Ionicons)`
    width: 24px;
    height: 24px;
    color: #6272a4;
`;

const FilterWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 16px;
    padding-right: 1px;
`;

const FilterButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-horizontal: 10px;

    padding-horizontal: 20px;
    padding-vertical: 8px;

    background-color: #fff;

    border-width: 1px;
    border-color: #ddd;
    border-radius: 40px;
`;

const FilterText = styled.Text`
    color: #797979;
    font-size: 16px;
`;

function Search() {
    return (
        <Container>
            <InputWrapper>
                <Input placeholder="Search" />
                <Icon name="search" size={24} color="black" />
            </InputWrapper>
            <FilterWrapper>
                <FilterButton>
                    <FilterText>Pending</FilterText>
                </FilterButton>
                <FilterButton>
                    <FilterText>Done</FilterText>
                </FilterButton>
            </FilterWrapper>
        </Container>
    );
}

export default Search;
