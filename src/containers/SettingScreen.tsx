import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Settings screen declaration - this is the screen we'll be pushing into the stack
export const SettingsScreen = () => {
  return (
    <View style={settingScreenStyle.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: "Settings Title",
    },
  },
};

const settingScreenStyle = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
