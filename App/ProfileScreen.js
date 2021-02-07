import {Button, Text} from "react-native";
import React from "react";
import {ScreenContainer} from "./Screens";

export const Profile = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Profile Screen</Text>
            <Button title="Drawer" onPress={() => navigation.toggleDrawer()}/>
            <Button title="Sign Out" onPress={() => alert("todo")}/>
        </ScreenContainer>
    );
};
