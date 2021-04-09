import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const image = require("../assets/images/error.png");

export const NoResult = () => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.img} />
      <Text style={style.text}>No data returned...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "WHITRABT",
    fontSize: 18,
    color: "white",
    margin: 10,
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
