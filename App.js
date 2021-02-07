import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SignIn } from "./App/SignInScreen";
import { CreateAccount } from "./App/CreateAccountScreen";
import { Home } from "./App/HomeScreen";
import { Profile } from "./App/ProfileScreen";
import { Search } from "./App/SearchScreen";
import { Details } from "./App/DetailsScreen";
import { Search2 } from "./App/Search2Screen";
import { Splash } from "./App/Splash";

const AuthSack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [useToken, setUseToken] = useState(""); // simulate token

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {useToken ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthSack.Navigator>
          <AuthSack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Sign in" }}
          />
          <AuthSack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: "Create Account" }}
          />
        </AuthSack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
