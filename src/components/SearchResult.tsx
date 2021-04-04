import React from "react";
import PropTypes from "prop-types";
import { FlatList, SafeAreaView, StyleSheet, View, Image, Pressable } from "react-native";
import { localPokemonData } from "../utilities/localPokemonData";
import { Navigation } from "react-native-navigation";
import { appStyles } from "../styles/styles";
import { Pokemon } from "./Pokemon";
import { appColours } from "../styles/colours";

const backIcon = require("../assets/images/back.png");

export const SearchResult = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* List of Pokemon */}
      <FlatList
        data={localPokemonData}
        renderItem={({ item }) => (
          <Pokemon id={item.id} name={item.name} imageSource={item.imageSource} types={item.types} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />

      {/* Back Button */}
      <View style={backButtonComponentStyle.container}>
        <Pressable
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: "Search",
              },
            })
          }
          style={[backButtonComponentStyle.button, appStyles.buttonShadow]}
        >
          <Image source={backIcon} style={backButtonComponentStyle.buttonImage} />
        </Pressable>
      </View>
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

const backButtonComponentStyle = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 99, //iOS
    elevation: 99, //Android
    margin: 20,
    right: 0,
    bottom: 0,
  },
  button: {
    padding: 15,
    backgroundColor: appColours.pokedexGray,
    borderRadius: 30,
  },
  buttonImage: {
    height: 25,
    width: 25,
  },
});
