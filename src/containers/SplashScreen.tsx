import React from "react";
import { View } from "react-native";
import { PokedexHeader } from "../components/PokedexHeader";
import { splashScreenStyle } from "../styles/styles";
import { SplashBody } from "../components/SplashBody";
import { PokedexFooter } from "../components/pokdedexFooter";

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
