import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColours } from "../styles/colours";

const pokeballImage = require("../assets/images/pokeBallAlt.png");
const searchIcon = require("../assets/images/search.png");

export const PokedexSearch = () => {
  return (
    <View style={PokedexSearchStyle.container}>
      {/* Info text */}
      <View style={PokedexSearchStyle.additionalDataTextContainer}>
        <Text style={PokedexSearchStyle.additionalDataText}>
          Select the additional pieces of data you would like returned with each Pokemon
        </Text>
      </View>

      {/* Rows of buttons to add additional data to query */}
      <View style={PokedexSearchStyle.flexDirectionRow}>
        <Pressable
          onPress={() => {}}
          style={[PokedexSearchStyle.additionalDataButton, { backgroundColor: "powderblue" }]}
        >
          <Image source={pokeballImage} style={PokedexSearchStyle.buttonImg} />
          <Text style={PokedexSearchStyle.additionalDataButtonText}>PLACEHOLDER</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={[PokedexSearchStyle.additionalDataButton, { backgroundColor: "skyblue" }]}>
          <Image source={pokeballImage} style={PokedexSearchStyle.buttonImg} />
          <Text style={PokedexSearchStyle.additionalDataButtonText}>PLACEHOLDER</Text>
        </Pressable>
      </View>

      <View style={PokedexSearchStyle.flexDirectionRow}>
        <Pressable
          onPress={() => {}}
          style={[PokedexSearchStyle.additionalDataButton, { backgroundColor: "steelblue" }]}
        >
          <Image source={pokeballImage} style={PokedexSearchStyle.buttonImg} />
          <Text style={PokedexSearchStyle.additionalDataButtonText}>PLACEHOLDER</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={[PokedexSearchStyle.additionalDataButton, { backgroundColor: "pink" }]}>
          <Image source={pokeballImage} style={PokedexSearchStyle.buttonImg} />
          <Text style={PokedexSearchStyle.additionalDataButtonText}>PLACEHOLDER</Text>
        </Pressable>
      </View>

      <View style={PokedexSearchStyle.flexDirectionRow}>
        <Pressable onPress={() => {}} style={[PokedexSearchStyle.additionalDataButton, { backgroundColor: "green" }]}>
          <Image source={pokeballImage} style={PokedexSearchStyle.buttonImg} />
          <Text style={PokedexSearchStyle.additionalDataButtonText}>PLACEHOLDER</Text>
        </Pressable>
        <View style={PokedexSearchStyle.additionalDataButton} />
      </View>

      {/* Search Button */}
      <View style={searchComponentStyle.container}>
        <Pressable onPress={() => {}} style={searchComponentStyle.button}>
          <Image source={searchIcon} style={{ height: 25, width: 25 }} />
        </Pressable>
      </View>
    </View>
  );
};

const PokedexSearchStyle = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  container: {
    flex: 1.5,
    flexDirection: "column",
    backgroundColor: appColours.pokedexRedOffset,
    margin: 5,
    borderRadius: 5,
  },
  additionalDataTextContainer: {
    marginTop: 10,
  },
  additionalDataText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "WHITRABT",
  },
  additionalDataButton: {
    flex: 1,
    width: 50,
    height: 60,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center", // Vertical
    // alignItems: "center", // Horizontal
  },
  additionalDataButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "WHITRABT",
  },
  buttonImg: {
    position: "absolute",
    right: 0,
    height: 30,
    width: 30,
    margin: 5,
    opacity: 0.2,
  },
});

const searchComponentStyle = StyleSheet.create({
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
    backgroundColor: appColours.pokedexRed,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "WHITRABT",
  },
});
