import { Button, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "./Screens";
import { AuthContext } from "../contexts/authContext";

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
