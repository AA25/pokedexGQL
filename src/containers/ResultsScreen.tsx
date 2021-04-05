import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { appColours } from "../styles/colours";
import { PokedexHeader } from "../components/PokedexHeader";
import { SearchResult } from "../components/SearchResult";

export const ResultsScreen = (props) => {
  return (
    <View style={resultScreenStyle.screenContainer}>
      <PokedexHeader />
      <SearchResult componentId={props.componentId} />
    </View>
  );
};

ResultsScreen.propTypes = {
  componentId: PropTypes.string,
};

const resultScreenStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: appColours.pokedexRed,
  },
});
