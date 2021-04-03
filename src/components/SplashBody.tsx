import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { mainRoot } from "../navigation/nagivationRoots";
import React from "react";
import { appColours } from "../styles/colours";
import { appStyles } from "../styles/styles";

const splashImage = require("../assets/images/PokemonGqlSplashAlt.png");

export const SplashBody = () => {
  return (
    <View style={introductionStyle.container}>
      <Image source={splashImage} style={introductionStyle.splashImg} />
      <Pressable
        onPress={() => Navigation.setRoot(mainRoot)}
        style={[introductionStyle.startButton, appStyles.buttonShadow]}
      >
        <Text style={introductionStyle.buttonText}>START NOW</Text>
      </Pressable>
    </View>
  );
};

const introductionStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  splashImg: {
    height: 238,
    width: 315,
    resizeMode: "contain",
  },
  startButton: {
    alignItems: "center",
    backgroundColor: appColours.pokedexRedOffset,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "WHITRABT",
    fontSize: 18,
    color: "white",
  },
});
