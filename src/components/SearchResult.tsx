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

export const SearchResult = (props) => {
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

  console.log("AOA");
  const pokemonData = data.pokemons;
  console.log(pokemonData);
  // TODO: transform layer here via destructuring

  return (
    <SafeAreaView style={styles.container}>
      {/* List of Pokemon */}
      <FlatList
        data={localPokemonData}
        renderItem={({ item }) => (
          <Pokemon id={item.id} name={item.name} imageSource={item.imageSource} type={item.type} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />

      {/* Back Button */}
      <FloatingBackButton componentId={props.componentId} navigationComponent={"Search"} />
    </SafeAreaView>
  );
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
