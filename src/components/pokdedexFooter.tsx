import { StyleSheet, View } from "react-native";
import React from "react";
import {appColours} from "../styles/colours";

export const PokedexFooter = () => {
  return (
    <View style={pokedexBottom.container}>
      <View style={pokedexBottom.thingy} />
    </View>
  );
};

const pokedexBottom = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  thingy: {
    height: 15,
    width: 150,
    backgroundColor: appColours.pokedexRedOffset,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    borderRadius: 20,
  },
});
