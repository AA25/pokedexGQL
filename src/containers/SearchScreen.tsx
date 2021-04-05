import { StyleSheet, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { appColours } from "../styles/colours";
import { PokedexHeader } from "../components/PokedexHeader";
import { PokedexDisplay } from "../components/PokedexDisplay";
import { PokedexSearch } from "../components/PokedexSearch";

export const SearchScreen = (props) => {
  return (
    <View style={searchScreenStyle.container}>
      <PokedexHeader />
      <PokedexDisplay />
      <PokedexSearch componentId={props.componentId} />
    </View>
  );
};

SearchScreen.propTypes = {
  componentId: PropTypes.string,
};

SearchScreen.options = {
  topBar: {
    title: {
      text: "Search Title",
    },
  },
};

const searchScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: appColours.pokedexRed,
  },
});
