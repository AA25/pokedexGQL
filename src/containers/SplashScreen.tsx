import React from "react";
import { StyleSheet, View } from "react-native";
import { PokedexHeader } from "../components/PokedexHeader";
import { SplashBody } from "../components/Splash/SplashBody";
import { PokedexFooter } from "../components/pokdedexFooter";
import { appColours } from "../styles/colours";

export const SplashScreen = () => {
  return (
    <View style={splashScreenStyle.screenContainer}>
      <PokedexHeader />
      <SplashBody />
      <PokedexFooter />
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

const splashScreenStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: appColours.pokedexRed,
  },
});
