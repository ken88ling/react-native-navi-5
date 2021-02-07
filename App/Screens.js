import React from "react";
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

