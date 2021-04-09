import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { typeColourIndex } from "../../styles/colours";
import { appStyles } from "../../styles/styles";

const containerBackground = require("../../assets/images/pokemonContainerBackground.png");
const closeIcon = require("../../assets/images/close.png");
let typeKey = 1;
let typeKeyModal = 1;

const determineBackgroundColourByType = (type: String) => {
  const findType = type.toLowerCase();

  if (typeColourIndex[findType]) {
    return typeColourIndex[findType];
  }
  return typeColourIndex.default;
};

export const Pokemon = ({ id, name, imageSource, type, additionalData }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[styles.pokemonContainer, { backgroundColor: determineBackgroundColourByType(type[0]) }]}
      >
        <Image source={containerBackground} style={styles.containerBackgroundImage} />
        <View style={styles.pokemonDataContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.id}>{id}</Text>
          <View style={styles.type}>
            {type.map((aType) => (
              <Text style={styles.typeText} key={typeKey++}>
                {aType}
              </Text>
            ))}
          </View>
        </View>
        <Image source={{ uri: imageSource }} style={styles.pokemonImage} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[modalStyle.container]}>
          <View
            style={[
              modalStyle.modalView,
              appStyles.buttonShadow,
              { backgroundColor: determineBackgroundColourByType(type[0]) },
            ]}
          >
            <Image source={containerBackground} style={modalStyle.modalViewBackground} />
            <Image source={{ uri: imageSource }} style={modalStyle.pokemonImage} />
            <View style={modalStyle.pokemonDataContainer}>
              <View style={modalStyle.pokemonDataHeader}>
                <Text style={modalStyle.name}>{name}</Text>
                <Text style={modalStyle.id}>{id}</Text>
              </View>
              <View style={modalStyle.pokemonDataBody}>
                {type.map((aType) => (
                  <Text style={modalStyle.typeText} key={typeKeyModal++}>
                    {aType}
                  </Text>
                ))}
              </View>
              <AdditionalData additionalData={additionalData} />
              <View style={modalStyle.pokemonDataFooter}>
                <Pressable style={[modalStyle.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <Image source={closeIcon} style={modalStyle.closeIcon} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

Pokemon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageSource: PropTypes.string,
  type: PropTypes.array,
  additionalData: PropTypes.object,
};

const AdditionalData = ({ additionalData }) => {
  let additionalDataKey = 1;
  const additionalDataText = [];
  for (const [key, value] of Object.entries(additionalData)) {
    additionalDataText.push(
      <Text key={additionalDataKey++} style={modalStyle.extraDataText}>
        {key}: {value}
      </Text>,
    );
  }
  return <View style={modalStyle.pokemonExtraDataBody}>{additionalDataText}</View>;
};

AdditionalData.propTypes = {
  additionalData: PropTypes.object,
};

const pokemonContainerWidth: number = Dimensions.get("window").width / 2 - 15;
const pokemonContainerHeight: number = Dimensions.get("window").width / 2 - 15;

const styles = StyleSheet.create({
  pokemonImage: {
    height: 90,
    width: 90,
    position: "absolute",
    margin: 5,
    right: 0,
    bottom: 0,
    resizeMode: "contain",
  },
  containerBackgroundImage: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  pokemonContainer: {
    backgroundColor: "black",
    width: pokemonContainerWidth,
    height: pokemonContainerHeight,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
  pokemonDataContainer: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    flex: 0,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  id: {
    fontSize: 18,
    fontFamily: "WHITRABT",
    textAlign: "right",
    opacity: 0.3,
  },
  type: {
    flex: 1,
    justifyContent: "flex-end",
  },
  typeText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    padding: 0.5,
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    width: 60,
    marginTop: 5,
  },
});

const modalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    backgroundColor: "white",
    width: 300,
    minHeight: 230,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  modalViewBackground: {
    height: 200,
    width: 200,
    position: "absolute",
    opacity: 0.3,
    top: 15,
    left: 50,
  },
  pokemonImage: {
    height: 145,
    width: 145,
    resizeMode: "contain",
    position: "absolute",
    top: 20,
    left: 120,
  },
  pokemonDataContainer: {
    flexDirection: "column",
  },
  pokemonDataHeader: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pokemonDataBody: {
    height: 120,
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  pokemonExtraDataBody: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
  },
  pokemonDataFooter: {
    height: 50,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  id: {
    fontSize: 20,
    fontFamily: "WHITRABT",
    textAlign: "right",
    opacity: 0.3,
  },
  typeText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 0.5,
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    width: 80,
    marginTop: 5,
  },
  extraDataText: {
    opacity: 1,
    color: "white",
    fontFamily: "WHITRABT",
    fontSize: 18,
    margin: 5,
    textAlign: "center",
  },
  buttonClose: {
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 1,
    width: 100,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  closeIcon: {
    height: 15,
    width: 15,
    opacity: 0.5,
  },
});
