import { StyleSheet } from "react-native";
import { appColours } from "./colours";

export const appStyles = StyleSheet.create({
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  floatingCornerButtonContainer: {
    position: "absolute",
    zIndex: 99, //iOS
    elevation: 99, //Android
    margin: 20,
    right: 0,
    bottom: 0,
  },
  floatingCornerButton: {
    padding: 15,
    backgroundColor: appColours.pokedexGray,
    borderRadius: 30,
  },
  floatingCornerButtonImg: {
    height: 25,
    width: 25,
  },
});
