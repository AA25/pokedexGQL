import React from "react";
import PropTypes from "prop-types";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Pokemon } from "./Pokemon";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { FloatingBackButton } from "./FloatingBackButton";
import { localPokemonData } from "../utilities/localPokemonData";
import { appConfig } from "../utilities/config";

const pokemonQuery = gql`
  query {
    pokemons {
      id
      name
      imageSource
      type
    }
  }
`;

const ResultList = ({ componentId, pokemonData }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* List of Pokemon */}
      <FlatList
        data={pokemonData}
        renderItem={({ item }) => (
          <Pokemon id={item.id} name={item.name} imageSource={item.imageSource} type={item.type} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />

      {/* Back Button */}
      <FloatingBackButton componentId={componentId} navigationComponent={"Search"} />
    </SafeAreaView>
  );
};

export const SearchResult = (props) => {
  // Initially set to use local data unless stated otherwise in config
  let pokemonData = localPokemonData;

  if (appConfig.USE_LOCAL_DATA && appConfig.API_URL !== "") {
    // Using real data
    return <ResultList componentId={props.componentId} pokemonData={pokemonData} />;
  }

  // Using real data
  const { data, loading, error } = useQuery(pokemonQuery);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
        <FloatingBackButton componentId={props.componentId} navigationComponent={"Search"} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Error />
        <FloatingBackButton componentId={props.componentId} navigationComponent={"Search"} />
      </View>
    );
  }

  // TODO: transform layer here
  pokemonData = data.pokemons;

  return <ResultList componentId={props.componentId} pokemonData={pokemonData} />;
};

SearchResult.propTypes = {
  componentId: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
