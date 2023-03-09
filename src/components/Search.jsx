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
`;

const Input = styled.TextInput`
    color: #6272a4;
    font-size: 20px;
`;

const Icon = styled(Ionicons)`
    width: 24px;
    height: 24px;
    color: #6272a4;
`;

const FilterWrapper = styled.View`
    flex-direction: row;

    margin-top: 16px;
    padding-right: 1px;
`;

const FilterButton = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-right: -1px;

    padding-horizontal: 16px;
    padding-vertical: 8px;

    background-color: #fff;

    border-width: 1px;
    border-color: #ddd;
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
                <FilterButton
                    style={{
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                    }}
                >
                    <FilterText>Pending</FilterText>
                </FilterButton>
                <FilterButton
                    style={{
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                    }}
                >
                    <FilterText>Done</FilterText>
                </FilterButton>
            </FilterWrapper>
        </Container>
    );
}

export default Search;
