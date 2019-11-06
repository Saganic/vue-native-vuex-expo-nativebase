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
    initialRouteName: "Home",
    drawerBackgroundColor: null,
    contentOptions: {
      itemsContainerStyle: {
        marginVertical: 0,
        backgroundColor: null
      },
      iconContainerStyle: {
        opacity: 1
      },
      labelStyle: {
        color: null
      },
      activeLabelStyle: {
        color: null
      }
    }
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
