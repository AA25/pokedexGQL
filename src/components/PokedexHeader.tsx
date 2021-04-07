import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { appColours } from "../styles/colours";

export const PokedexHeader = () => {
  return (
    <View style={pokedexHeaderStyle.container}>
      <Image source={require("../assets/images/mainLedBlue.png")} style={pokedexHeaderStyle.mainLedImg} />
      <Image source={require("../assets/images/miniLedRed.png")} style={pokedexHeaderStyle.miniLedImg} />
      <Image source={require("../assets/images/miniLedYellow.png")} style={pokedexHeaderStyle.miniLedImg} />
      <Image source={require("../assets/images/miniLedGreen.png")} style={pokedexHeaderStyle.miniLedImg} />
    </View>
  );
};

const pokedexHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: appColours.pokedexRed,
    padding: 10,
    borderColor: appColours.pokedexRedOffset,
    borderBottomWidth: 3,
    borderTopWidth: 1,
  },
  mainLedImg: {
    height: 60,
    width: 60,
    margin: 5,
  },
  miniLedImg: {
    height: 25,
    width: 25,
    margin: 5,
  },
});
