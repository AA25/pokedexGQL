## PokedexGQL
- This project is a mobile application created using React Native, where users can query pokemon data from
a limited sample. This data is retured from a GraphQL API server (another project of mine, https://github.com/AA25/GraphQL-API).
Technologies used are React Native, ...

## Cloning and running project for the first time (Only for Android for now)
- React Native
    - Set up your environment locally for react native projects
        - https://reactnative.dev/docs/environment-setup
    - Once the above is done, do the following from root directory of the pokemon
        - Run Metro `npx react-native start` 
        - Android
            - Plug in your phone and run `npx react run-android` (with Metro already running)
            - For move guidance see https://reactnative.dev/docs/running-on-device
            
## Commands
- Where Metro is running
    - Tap `r` to reload the app
    - Tap `d` to open developer menu

# Problem and solutions
- "Watchman crawl fail"
    - https://github.com/facebook/watchman/issues/751
- "RNN Pod has not been added to Podfile"
    - https://github.com/wix/react-native-navigation/issues/6470
- Regenerate android & ios files
    ```
    npm install react-native-community/cli
    sudo rm -rf android/ ios/
    yarn add react-native-eject
    npx react-native eject
    ```
