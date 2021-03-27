import { StyleSheet } from "react-native";
import { appColours } from "./colours";

export const splashScreenStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: appColours.pokedexRed,
  },
});
