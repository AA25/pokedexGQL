import { Button, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import React from "react";
import PropTypes from "prop-types";
import {appColours} from "../styles/colours";
import {PokedexHeader} from "../components/PokedexHeader";

export const SearchScreen = (props) => {
  return (
    <View style={searchScreenStyle.screenContainer}>
        <PokedexHeader />
        <View>
            <Text>Home Screen</Text>
        </View>
    </View>
  );
};

SearchScreen.propTypes = {
  componentId: PropTypes.string,
};

SearchScreen.options = {
  topBar: {
    title: {
      text: "Home Title",
    },
  },
};

const searchScreenStyle = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "whitesmoke",
    },
});
