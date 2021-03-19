/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { HomeScreen } from "./src/containers/HomeScreen";
import { SettingsScreen } from "./src/containers/SettingScreen";
import { SplashScreen } from "./src/containers/SplashScreen";
import { entryRoot } from "./src/navigation/nagivationRoots";
import { navigationOption } from "./src/navigation/navigationOptions";

Navigation.registerComponent("Home", () => HomeScreen);
Navigation.registerComponent("Settings", () => SettingsScreen);
Navigation.registerComponent("Splash", () => SplashScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(entryRoot);
});

Navigation.setDefaultOptions(navigationOption);
