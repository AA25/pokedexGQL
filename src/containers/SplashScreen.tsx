import React from "react";
import { styles } from "../styles/styles";
import { Button, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { mainRoot } from "../navigation/nagivationRoots";

export const SplashScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Splash Screen</Text>
      <Button
        title="Home"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};
SplashScreen.options = {
  topBar: {
    title: {
      text: "Splash Title",
    },
  },
};
