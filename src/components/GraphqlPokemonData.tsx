import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { Loading } from "./Loading";
import { FloatingBackButton } from "./FloatingBackButton";
import { Error } from "./Error";
import React from "react";
import { Pokemon } from "./Pokemon";
import PropTypes from "prop-types";

export const PokemonListViaGraphQL = ({ componentId, allFields }) => {
  const { data, loading, error } = useQuery(gql`
    query {
      pokemons {
        ${allFields}
      }
    }
  `);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
        <FloatingBackButton componentId={componentId} navigationComponent={"Search"} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Error />
        <FloatingBackButton componentId={componentId} navigationComponent={"Search"} />
      </View>
    );
  }

  // TODO: transform layer here
  const pokemonData = data.pokemons;

  return <PokemonList componentId={componentId} pokemonData={pokemonData} />;
};

PokemonListViaGraphQL.propTypes = {
  componentId: PropTypes.string,
  allFields: PropTypes.string,
};

export const PokemonList = ({ componentId, pokemonData }) => {
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

PokemonList.propTypes = {
  componentId: PropTypes.string,
  pokemonData: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
