import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {appColours} from "../styles/colours";

const displayImage = require("../assets/images/pikachuInnerScreen.png")
const hamburgerIcon = require("../assets/images/hamburgerIcon.png")

export const PokedexDisplay = () => {
    return (
        <View style={PokedexInnerScreenStyle.container}>
            <View style={PokedexInnerScreenStyle.frameContainer}>
                <View style={PokedexInnerScreenStyle.frameTop}>
                    <View style={PokedexInnerScreenStyle.miniLedTop}/>
                    <View style={PokedexInnerScreenStyle.miniLedTop}/>
                </View>
                <View style={PokedexInnerScreenStyle.displayContainer}>
                    <View style={PokedexInnerScreenStyle.display}>
                        <Image source={displayImage}  style={PokedexInnerScreenStyle.displayImage}/>
                    </View>
                </View>
                <View style={PokedexInnerScreenStyle.frameBottom}>
                    <View style={PokedexInnerScreenStyle.miniLedBottom}/>
                    <Image source={hamburgerIcon}  style={PokedexInnerScreenStyle.hamburgerIcon}/>
                </View>
            </View>
        </View>
    );
}

const PokedexInnerScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColours.pokedexRed,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    frameContainer: {
        flexDirection: "column",
        backgroundColor: "#dedede",
        width: 220,
        height: 170,
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: appColours.pokedexRedOffset,
        borderRadius: 5,
    },
    frameTop: {
        flexDirection: "row",
        justifyContent: "center",
        height: 20,
        padding: 5,
    },
    displayContainer: {
        backgroundColor: '#99cb9a',
        height: 120,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "#237f11",
        borderRadius: 5,
    },
    frameBottom: {
        flexDirection: "row",
        justifyContent: 'space-between',
        height: 30,
        alignItems: "center",
    },
    display: {
        width: "100%",
        height: 120,
    },
    displayImage: {
        resizeMode: "contain",
        height: '100%',
        width: '100%',
    },
    miniLedTop: {
        width: 10,
        height: 10,
        backgroundColor: "#c40201",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "black",
        marginLeft: 5,
        borderRadius: 25,
    },
    miniLedBottom: {
        width: 20,
        height: 20,
        backgroundColor: "#c40201",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 25,
        margin: 10,
    },
    hamburgerIcon: {
        width: 20,
        height: 20,
        borderWidth: 1.5,
        margin: 10,
    },
})
