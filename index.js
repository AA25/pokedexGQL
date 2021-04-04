/**
 * Entry point of the application
 *
 * The pages tied to the `entryRoot` determine what page will be displayed first
 *
 * @format
 */

import { entryRoot } from "./src/navigation/nagivationRoots";
import { Navigation } from "react-native-navigation";
import { navigationOption } from "./src/navigation/navigationOptions";
import { SearchScreen } from "./src/containers/SearchScreen";
import { SplashScreen } from "./src/containers/SplashScreen";

Navigation.registerComponent("Home", () => SearchScreen);
Navigation.registerComponent("Splash", () => SplashScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(entryRoot);
});

Navigation.setDefaultOptions(navigationOption);
