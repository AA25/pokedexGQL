## PokedexGQL
- This project is a mobile application created using React Native, where users can query pokemon data from
a limited sample. This data *will be* retured from a GraphQL API server (another project of mine, https://github.com/AA25/GraphQL-API).
Technologies/Libraries used were React Native, React Native Navigation, ApolloGraphql client, React Native Debugger 

## Cloning and running project for the first time (Only for Android for now)
- React Native
    - Set up your environment locally for react native projects
        - https://reactnative.dev/docs/environment-setup
    - Once the above is done, do the following from root directory of the pokemon
        - Run Metro `npx react-native start` 
        - Android
            - Plug in your phone and run `npx react run-android` (with Metro already running)
            - For move guidance see https://reactnative.dev/docs/running-on-device

- React Native Debugger
    - Follow getting started steps
        - https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md
            
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

# Resources
- https://www.apollographql.com/docs/react/integrations/react-native/
- https://wix.github.io/react-native-navigation/next/docs/advanced-navigation
- https://textcraft.net/style/Textcraft/pokemon

# Design Inspirations
- https://res.cloudinary.com/practicaldev/image/fetch/s--YCNJ96G8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://kamaleshjicse.files.wordpress.com/2018/11/pokedex-kamalesh.gif
- https://www.gamingoutletmerch.co.uk/ekmps/shops/51c3ae/images/pokedex-design-faux-leather-passport-cover-protector-inspired-by-pokemon-2502-1-p.png
- https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5069763-9098-4808-b222-a0089bb5786d/dcrrow9-6eb749e4-5308-4985-ac0b-20e432f8425c.png/v1/fill/w_1600,h_2846,q_80,strp/pokedex_phone_wallpaper_by_drboxhead_dcrrow9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yODQ2IiwicGF0aCI6IlwvZlwvYzUwNjk3NjMtOTA5OC00ODA4LWIyMjItYTAwODliYjU3ODZkXC9kY3Jyb3c5LTZlYjc0OWU0LTUzMDgtNDk4NS1hYzBiLTIwZTQzMmY4NDI1Yy5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t2dAXZvKlDN3T5rqaf2S30cynoMTqN-7cv4Ef_jM3Rk
- https://d33wubrfki0l68.cloudfront.net/f54808f5033f658fa051f9ec766e9dec80c94692/b0029/images/lets-review-pokedex/screens.png

