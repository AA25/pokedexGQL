import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const loadingImage = require("../assets/images/pokeBallAlt.png");

export const Loading = () => {
  return (
    <View style={loadingStyle.container}>
      <Image source={loadingImage} style={loadingStyle.loadingImg} />
      <Text style={loadingStyle.loadingText}>Loading...</Text>
    </View>
  );
};

const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontFamily: "WHITRABT",
    fontSize: 28,
    color: "white",
    margin: 10,
  },
  loadingImg: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
