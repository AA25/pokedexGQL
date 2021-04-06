import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const errorImage = require("../assets/images/error.png");

export const Error = () => {
    return (
        <View style={errorStyle.container}>
            <Image source={errorImage} style={errorStyle.errorImg} />
            <Text style={errorStyle.errorText}>Well thanks... you broke it</Text>
        </View>
    )
}

const errorStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        fontFamily: "WHITRABT",
        fontSize: 18,
        color: "white",
        margin: 10,
    },
    errorImg: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
});
