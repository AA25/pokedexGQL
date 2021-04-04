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
import { ResultsScreen } from "./src/containers/ResultsScreen";

Navigation.registerComponent("Splash", () => SplashScreen);
Navigation.registerComponent("Search", () => SearchScreen);
Navigation.registerComponent("Results", () => ResultsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(entryRoot);
});

Navigation.setDefaultOptions(navigationOption);
