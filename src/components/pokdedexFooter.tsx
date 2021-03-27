import { StyleSheet, View } from "react-native";
import React from "react";

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
    backgroundColor: "#AC193C",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    borderRadius: 20,
  },
});
