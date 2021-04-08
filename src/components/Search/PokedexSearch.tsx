import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { appColours } from "../../styles/colours";
import { appStyles } from "../../styles/styles";
import { Navigation } from "react-native-navigation";
import PropTypes from "prop-types";
import { AdditionalFieldFrontEnd, IAdditionalData, storeAdditionalFields } from "../../helpers/AdditionalFieldHelper";

const pokeballImage = require("../../assets/images/pokeBallAlt.png");
const searchIcon = require("../../assets/images/search.png");

export const PokedexSearch = (props) => {
  const [additionalDataA, pressedAdditionalDataA] = useState(false);
  const [additionalDataB, pressedAdditionalDataB] = useState(false);
  const [additionalDataC, pressedAdditionalDataC] = useState(false);
  const [additionalDataD, pressedAdditionalDataD] = useState(false);
  const [additionalDataAll, pressedAdditionalDataAll] = useState(false);

  const changeButtonActivity = (buttonStateString: string) => {
    switch (buttonStateString) {
      case "additionalDataA":
        pressedAdditionalDataA(!additionalDataA);
        break;
      case "additionalDataB":
        pressedAdditionalDataB(!additionalDataB);
        break;
      case "additionalDataC":
        pressedAdditionalDataC(!additionalDataC);
        break;
      case "additionalDataD":
        pressedAdditionalDataD(!additionalDataD);
        break;
      case "additionalDataAll":
        pressedAdditionalDataAll(!additionalDataAll);
        pressedAdditionalDataA(!additionalDataAll);
        pressedAdditionalDataB(!additionalDataAll);
        pressedAdditionalDataC(!additionalDataAll);
        pressedAdditionalDataD(!additionalDataAll);
        break;
    }
  };

  // Store additional data and navigate to Results page
  const initiateButtonPressLogic = async () => {
    const additionalDataOptions: IAdditionalData = {
      A: additionalDataA,
      B: additionalDataB,
      C: additionalDataC,
      D: additionalDataD,
    };
    await storeAdditionalFields(additionalDataOptions);

    await Navigation.push(props.componentId, {
      component: {
        name: "Results",
      },
    });
  };

  return (
    <View style={style.container}>
      {/* Info text */}
      <View style={style.additionalDataTextContainer}>
        <Text style={style.additionalDataText}>
          Select the additional pieces of data you would like returned with each Pokemon
        </Text>
      </View>

      {/* Rows of buttons to add additional data to query */}
      <View style={style.flexDirectionRow}>
        <Pressable
          onPress={() => {
            changeButtonActivity("additionalDataA");
          }}
          style={[style.additionalDataButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, additionalDataA ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.additionalDataButtonText}>{AdditionalFieldFrontEnd.A}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            changeButtonActivity("additionalDataB");
          }}
          style={[style.additionalDataButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, additionalDataB ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.additionalDataButtonText}>{AdditionalFieldFrontEnd.B}</Text>
        </Pressable>
      </View>

      <View style={style.flexDirectionRow}>
        <Pressable
          onPress={() => {
            changeButtonActivity("additionalDataC");
          }}
          style={[style.additionalDataButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, additionalDataC ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.additionalDataButtonText}>{AdditionalFieldFrontEnd.C}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            changeButtonActivity("additionalDataD");
          }}
          style={[style.additionalDataButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, additionalDataD ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.additionalDataButtonText}>{AdditionalFieldFrontEnd.D}</Text>
        </Pressable>
      </View>

      <View style={style.flexDirectionRow}>
        <Pressable
          onPress={() => {
            changeButtonActivity("additionalDataAll");
          }}
          style={[style.additionalDataButton, style.allSelectorButton, appStyles.buttonShadow]}
        >
          <Text style={[style.additionalDataButtonText, [style.centerText]]}>
            {additionalDataAll ? "DESELECT ALL" : "SELECT ALL"}
          </Text>
        </Pressable>
        <View style={[style.additionalDataButton, style.transparent]} />
      </View>

      {/* Search Button */}
      <View style={appStyles.floatingCornerButtonContainer}>
        <Pressable onPress={initiateButtonPressLogic} style={[appStyles.floatingCornerButton, appStyles.buttonShadow]}>
          <Image source={searchIcon} style={appStyles.floatingCornerButtonImg} />
        </Pressable>
      </View>
    </View>
  );
};

PokedexSearch.propTypes = {
  componentId: PropTypes.string,
};

const style = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  container: {
    flex: 1.5,
    flexDirection: "column",
    backgroundColor: appColours.pokedexRedOffset,
    margin: 5,
    borderRadius: 5,
  },
  additionalDataTextContainer: {
    marginTop: 10,
  },
  additionalDataText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "WHITRABT",
    lineHeight: 18,
  },
  additionalDataButton: {
    flex: 1,
    width: 50,
    height: 60,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: appColours.pokedexGray,
    justifyContent: "center", // Vertical
    // alignItems: "center", // Horizontal
  },
  allSelectorButton: {
    backgroundColor: "forestgreen",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  additionalDataButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "WHITRABT",
  },
  centerText: {
    textAlign: "center",
  },
  buttonImg: {
    position: "absolute",
    right: 0,
    height: 30,
    width: 30,
    margin: 5,
    opacity: 0.2,
  },
  buttonImgActive: {
    opacity: 1,
  },
  buttonImgInactive: {
    opacity: 0.2,
  },
});
