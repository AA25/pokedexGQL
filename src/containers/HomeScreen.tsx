import { styles } from "../styles/styles";
import { Button, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import React from "react";

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
              name: 'Settings',
            },
          })
        }
      />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home Title',
    },
  },
};
