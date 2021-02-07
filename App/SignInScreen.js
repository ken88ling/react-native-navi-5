import { Button, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "./Screens";

export const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => navigation.push('')} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};
