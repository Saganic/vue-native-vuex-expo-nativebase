import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";

import HomeView from "../views/index";
import AboutView from "../views/about";

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeView
    },
    About: {
      screen: AboutView
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: {
        screen: Drawer
      }
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);

export default AppNavigation;
