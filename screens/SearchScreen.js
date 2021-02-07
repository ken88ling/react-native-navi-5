import {Button, Text} from "react-native";
import React from "react";
import {ScreenContainer} from "./Screens";

export const Search = ({navigation}) => (
    <ScreenContainer>
        <Text>Search Screen</Text>
        <Button title="Search 2" onPress={() => navigation.push("Search2")}/>
        <Button
            title="React Native School"
            onPress={() => {
                navigation.navigate("Home", {
                    screen: "Details",
                    params: {name: "React Native School"},
                });
            }}
        />
    </ScreenContainer>
);
