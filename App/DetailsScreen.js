import {Text} from "react-native";
import React from "react";
import {ScreenContainer} from "./Screens";

export const Details = ({route}) => (
    <ScreenContainer>
        <Text>Details Screen</Text>
        {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
);
