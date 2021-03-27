import { Button, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import React from "react";
import PropTypes from "prop-types";

export const HomeScreen = (props) => {
  return (
    <View style={homeScreenStyle.root}>
      <Text>Home Screen</Text>
      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: "Settings",
            },
          })
        }
      />
    </View>
  );
};

HomeScreen.propTypes = {
  componentId: PropTypes.string,
};

HomeScreen.options = {
  topBar: {
    title: {
      text: "Home Title",
    },
  },
};

const homeScreenStyle = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
