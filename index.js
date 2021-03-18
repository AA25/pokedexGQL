/**
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Navigation } from "react-native-navigation";

const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Home Screen</Text>
            <Button
                title='Push Settings Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'Settings',
                    }
                })}
            />
        </View>
    );
};
HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home Title',
        }
    }
}

// Settings screen declaration - this is the screen we'll be pushing into the stack
const SettingsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Settings Screen</Text>
        </View>
    );
}
SettingsScreen.options = {
    topBar: {
        title: {
            text: 'Settings Title'
        }
    }
}

const SplashScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Splash Screen</Text>
            <Button
                title='Home'
                color='#710ce3'
                onPress={() => Navigation.setRoot(mainRoot)}
            />
        </View>
    );
}
SplashScreen.options = {
    topBar: {
        title: {
            text: 'Splash Title',
        }
    }
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Splash', () => SplashScreen);

const mainRoot = {
    root: {
        stack: {
            children: [{
                component: {
                    name: 'Home'
                }
            }]
        }
    }
};

const entryRoot = {
    root: {
        component: {
            name: "Splash"
        }
    }
}

Navigation.events().registerAppLaunchedListener(async () => {
    await Navigation.setRoot(entryRoot)
})

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        },
        visible: false
    }
});

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});
