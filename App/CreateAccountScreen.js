import {Button, Text} from "react-native";
import React from "react";
import {ScreenContainer} from "./Screens";

export const CreateAccount = () => {
    return (
      <ScreenContainer>
        <Text>Create Account Screen</Text>
        <Button title="Sign Up" onPress={() => alert("todo")} />
      </ScreenContainer>
    );
};
