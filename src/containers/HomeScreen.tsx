import { styles } from "../styles/styles";
import { Button, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import React from "react";
import PropTypes from "prop-types";

export const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
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
