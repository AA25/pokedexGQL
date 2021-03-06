import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { appColours } from "../styles/colours";
import { PokedexHeader } from "../components/PokedexHeader";
import { PokemonResult } from "../components/Results/PokemonResult";
import { ApolloProvider } from "@apollo/client";
import { ApolloClientSingleton } from "../helpers/ApolloClientSingleton";

const client = new ApolloClientSingleton.getInstance();

export const ResultsScreen = (props) => {
  return (
    <ApolloProvider client={client}>
      <View style={resultScreenStyle.screenContainer}>
        <PokedexHeader />
        <PokemonResult componentId={props.componentId} />
      </View>
    </ApolloProvider>
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
