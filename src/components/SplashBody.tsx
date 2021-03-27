import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { mainRoot } from "../navigation/nagivationRoots";
import React from "react";
import { appColours } from "../styles/colours";

const splashImage = require("../assets/images/PokemonGqlSplashAlt.png");

export const SplashBody = () => {
  return (
    <View style={introductionStyle.container}>
      <Image source={splashImage} style={introductionStyle.splashImg} />
      <Pressable onPress={() => Navigation.setRoot(mainRoot)} style={introductionStyle.startButton}>
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttonText: {
    fontFamily: "WHITRABT",
    fontSize: 18,
    color: "white",
  },
});
