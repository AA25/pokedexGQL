import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { mainRoot } from "../navigation/nagivationRoots";
import { PokedexHeader } from "../components/PokedexHeader";
import { splashStyle } from "../styles/styles";

const splashImage = require("../assets/images/PokemonGqlSplashAlt.png");

export const SplashScreen = () => {
  return (
    <View style={splashStyle.screenContainer}>
      <PokedexHeader />
      <View style={introductionStyle.container}>
        <Image source={splashImage} style={introductionStyle.splashImg} />
        {/*<Button title="LET'S START" style={introductionStyle.nextButton} onPress={() => Navigation.setRoot(mainRoot)} />*/}
        <Pressable onPress={() => Navigation.setRoot(mainRoot)} style={introductionStyle.startButton}>
          <Text style={introductionStyle.buttonText}>START NOW</Text>
        </Pressable>
      </View>
      <View style={pokedexBottom.container}>
        <View style={pokedexBottom.thingy} />
      </View>
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

const introductionStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    // backgroundColor: 'skyblue', TODO
  },
  splashImg: {
    height: 238,
    width: 315,
    resizeMode: "contain",
  },
  startButton: {
    alignItems: "center",
    backgroundColor: "#AC193C",
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

const pokedexBottom = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  thingy: {
    height: 15,
    width: 150,
    backgroundColor: "#AC193C",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    borderRadius: 20,
  },
});
