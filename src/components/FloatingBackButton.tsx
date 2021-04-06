import { Image, Pressable, View } from "react-native";
import { appStyles } from "../styles/styles";
import { Navigation } from "react-native-navigation";
import React from "react";
import PropTypes from "prop-types";

const backIcon = require("../assets/images/back.png");

export const FloatingBackButton = ({ componentId, navigationComponent }) => {
  return (
    <View style={appStyles.floatingCornerButtonContainer}>
      <Pressable
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: navigationComponent,
            },
          })
        }
        style={[appStyles.floatingCornerButton, appStyles.buttonShadow]}
      >
        <Image source={backIcon} style={appStyles.floatingCornerButtonImg} />
      </Pressable>
    </View>
  );
};

FloatingBackButton.propTypes = {
  componentId: PropTypes.number,
  navigationComponent: PropTypes.string,
};
