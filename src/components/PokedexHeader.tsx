import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { appColours } from "../styles/colours";

export const PokedexHeader = () => {
  return (
    <View style={pokedexHeaderStyle.container}>
      <Image source={require("../assets/images/mainLed.png")} style={pokedexHeaderStyle.mainLedImg} />
      <Image source={require("../assets/images/miniLed1.png")} style={pokedexHeaderStyle.miniLedImg} />
      <Image source={require("../assets/images/miniLed2.png")} style={pokedexHeaderStyle.miniLedImg} />
      <Image source={require("../assets/images/miniLed3.png")} style={pokedexHeaderStyle.miniLedImg} />
      {/*<View style={pokedexHeaderStyle.mainLed}></View>*/}
      {/*<View style={pokedexHeaderStyle.miniLedA}></View>*/}
      {/*<View style={pokedexHeaderStyle.miniLedB}></View>*/}
      {/*<View style={pokedexHeaderStyle.miniLedC}></View>*/}
    </View>
  );
};

const pokedexHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: appColours.pokedexRed,
    // height: 90,
    padding: 10,
    borderColor: "#AC193C",
    borderBottomWidth: 3,
    borderTopWidth: 1,
  },
  mainLedImg: {
    height: 60,
    width: 60,
    margin: 5,
  },
  miniLedImg: {
    height: 25,
    width: 25,
    margin: 5,
  },
  // mainLed: {
  //     width: 60,
  //     height: 60,
  //     backgroundColor: "#5bc5ff",
  //     borderWidth: 3,
  //     borderStyle: "solid",
  //     borderColor: "#efefef",
  //     margin: 5,
  //     borderRadius: 50,
  //
  // },
  // miniLedA: {
  //     width: 25,
  //     height: 25,
  //     backgroundColor: "#c40201",
  //     borderWidth: 1.5,
  //     borderStyle: "solid",
  //     borderColor: "black",
  //     margin: 5,
  //     borderRadius: 25,
  // },
  // miniLedB: {
  //     width: 25,
  //     height: 25,
  //     backgroundColor: "#f2c73c",
  //     borderWidth: 1.5,
  //     borderStyle: "solid",
  //     borderColor: "black",
  //     margin: 5,
  //     borderRadius: 25,
  // },
  // miniLedC: {
  //     width: 25,
  //     height: 25,
  //     backgroundColor: "#237f11",
  //     borderWidth: 1.5,
  //     borderStyle: "solid",
  //     borderColor: "black",
  //     margin: 5,
  //     borderRadius: 25,
  // },
});
