import { styles } from "../styles/styles";
import { Text, View } from "react-native";
import React from "react";

// Settings screen declaration - this is the screen we'll be pushing into the stack
export const SettingsScreen = () => {
  return (
    <View style={styles.root}>
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
