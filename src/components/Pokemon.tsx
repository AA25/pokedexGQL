import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { typeColourIndex } from "../styles/colours";

const containerBackground = require("../assets/images/pokemonContainerBackground.png");
let typeKey = 1;

const determineBackgroundColourByType = (type) => {
  if (typeColourIndex[type]) {
    return typeColourIndex[type];
  }
  return typeColourIndex.Default;
};

export const Pokemon = ({ id, name, imageSource, type }) => {
  return (
    <View style={[styles.pokemonContainer, { backgroundColor: determineBackgroundColourByType(type[0]) }]}>
      <Image source={containerBackground} style={styles.containerBackgroundImage} />
      <View style={styles.pokemonDataContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>#{id}</Text>
        <View style={styles.type}>
          {type.map((aType) => (
            <Text style={styles.typeText} key={typeKey++}>
              {aType}
            </Text>
          ))}
        </View>
      </View>
      <Image source={{ uri: imageSource }} style={styles.pokemonImage} />
    </View>
  );
};

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageSource: PropTypes.string,
  types: PropTypes.array,
};

const pokemonContainerWidth: number = Dimensions.get("window").width / 2 - 15;
const pokemonContainerHeight: number = Dimensions.get("window").width / 2 - 15;

const styles = StyleSheet.create({
  pokemonImage: {
    height: 90,
    width: 90,
    position: "absolute",
    margin: 5,
    right: 0,
    bottom: 0,
    resizeMode: "contain",
  },
  containerBackgroundImage: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  pokemonContainer: {
    backgroundColor: "black",
    width: pokemonContainerWidth,
    height: pokemonContainerHeight,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
  pokemonDataContainer: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    flex: 0,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  id: {
    fontSize: 18,
    fontFamily: "WHITRABT",
    textAlign: "right",
    opacity: 0.3,
  },
  type: {
    flex: 1,
    justifyContent: "flex-end",
  },
  typeText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    padding: 0.5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    width: 60,
    marginTop: 5,
  },
});
