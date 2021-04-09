import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { appColours } from "../../styles/colours";
import { appStyles } from "../../styles/styles";
import { Navigation } from "react-native-navigation";
import PropTypes from "prop-types";
import {
  AdditionalFieldsFrontEnd,
  IAdditionalFields,
  storeAdditionalFields,
} from "../../helpers/AdditionalFieldHelper";

const pokeballImage = require("../../assets/images/pokeBallAlt.png");
const searchIcon = require("../../assets/images/search.png");

export const PokedexSearch = (props) => {
  const [fieldA, pressedFieldA] = useState(false);
  const [fieldB, pressedFieldB] = useState(false);
  const [fieldC, pressedFieldC] = useState(false);
  const [fieldD, pressedFieldD] = useState(false);
  const [fieldAll, pressedFieldAll] = useState(false);

  const changeButtonActivity = (buttonStateString: string) => {
    switch (buttonStateString) {
      case "fieldA":
        pressedFieldA(!fieldA);
        break;
      case "fieldB":
        pressedFieldB(!fieldB);
        break;
      case "fieldC":
        pressedFieldC(!fieldC);
        break;
      case "fieldD":
        pressedFieldD(!fieldD);
        break;
      case "fieldAll":
        pressedFieldAll(!fieldAll);
        pressedFieldA(!fieldAll);
        pressedFieldB(!fieldAll);
        pressedFieldC(!fieldAll);
        pressedFieldD(!fieldAll);
        break;
    }
  };

  // Store additional data and navigate to Results page
  const initiateButtonPressLogic = async () => {
    const fieldOptions: IAdditionalFields = {
      A: fieldA,
      B: fieldB,
      C: fieldC,
      D: fieldD,
    };
    await storeAdditionalFields(fieldOptions);

    await Navigation.push(props.componentId, {
      component: {
        name: "Results",
      },
    });
  };

  return (
    <View style={style.container}>
      {/* Info text */}
      <View style={style.fieldTextContainer}>
        <Text style={style.fieldText}>
          Select the additional pieces of data you would like returned with each Pokemon
        </Text>
      </View>

      {/* Rows of buttons to add additional data to query */}
      <View style={style.flexDirectionRow}>
        {/* Row One */}
        <Pressable
          onPress={() => {
            changeButtonActivity("fieldA");
          }}
          style={[style.fieldButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, fieldA ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.fieldButtonText}>{AdditionalFieldsFrontEnd.A}</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            changeButtonActivity("fieldB");
          }}
          style={[style.fieldButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, fieldB ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.fieldButtonText}>{AdditionalFieldsFrontEnd.B}</Text>
        </Pressable>
      </View>

      {/* Row Two */}
      <View style={style.flexDirectionRow}>
        <Pressable
          onPress={() => {
            changeButtonActivity("fieldC");
          }}
          style={[style.fieldButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, fieldC ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.fieldButtonText}>{AdditionalFieldsFrontEnd.C}</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            changeButtonActivity("fieldD");
          }}
          style={[style.fieldButton, appStyles.buttonShadow]}
        >
          <Image
            source={pokeballImage}
            style={[style.buttonImg, fieldD ? style.buttonImgActive : style.buttonImgInactive]}
          />
          <Text style={style.fieldButtonText}>{AdditionalFieldsFrontEnd.D}</Text>
        </Pressable>
      </View>

      {/* Row Three */}
      <View style={style.flexDirectionRow}>
        <Pressable
          onPress={() => {
            changeButtonActivity("fieldAll");
          }}
          style={[style.fieldButton, style.allSelectorButton, appStyles.buttonShadow]}
        >
          <Text style={[style.fieldButtonText, [style.centerText]]}>{fieldAll ? "DESELECT ALL" : "SELECT ALL"}</Text>
        </Pressable>
        <View style={[style.fieldButton, style.transparent]} />
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
  fieldTextContainer: {
    marginTop: 10,
  },
  fieldText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "WHITRABT",
    lineHeight: 18,
  },
  fieldButton: {
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
  fieldButtonText: {
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
