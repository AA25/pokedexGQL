import React from "react";
import PropTypes from "prop-types";
import { FlatList, SafeAreaView, StyleSheet, View, Image, Pressable } from "react-native";
import { localPokemonData } from "../utilities/localPokemonData";
import { Navigation } from "react-native-navigation";
import { appStyles } from "../styles/styles";
import { Pokemon } from "./Pokemon";

const backIcon = require("../assets/images/back.png");

export const SearchResult = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* List of Pokemon */}
      <FlatList
        data={localPokemonData}
        renderItem={({ item }) => (
          <Pokemon id={item.id} name={item.name} imageSource={item.imageSource} type={item.type} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />

      {/* Back Button */}
      <View style={appStyles.floatingCornerButtonContainer}>
        <Pressable
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: "Search",
              },
            })
          }
          style={[appStyles.floatingCornerButton, appStyles.buttonShadow]}
        >
          <Image source={backIcon} style={appStyles.floatingCornerButtonImg} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

SearchResult.propTypes = {
  componentId: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
