import { Button, Text } from "react-native";
import React from "react";
import { ScreenContainer } from "./Screens";
import { AuthContext } from "../contexts/authContext";

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};
