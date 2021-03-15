/**
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";

const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Home Screen</Text>
        </View>
    );
};

Navigation.registerComponent('Home', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'Home'
                    }
                }]
            }
        }
    })
})

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});
