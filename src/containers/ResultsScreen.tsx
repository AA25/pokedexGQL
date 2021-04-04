import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { appColours } from "../styles/colours";
import { PokedexHeader } from "../components/PokedexHeader";

export const ResultsScreen = () => {
  return (
    <View style={resultScreenStyle.screenContainer}>
      <PokedexHeader />
    </View>
  );
};

const resultScreenStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: appColours.pokedexRed,
  },
});
