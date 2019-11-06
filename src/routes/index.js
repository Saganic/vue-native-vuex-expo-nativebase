import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import darkMode from "../../assets/native-base-theme/variables/darkMode";
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
    drawerBackgroundColor: darkMode.containerBgColor,
    contentOptions: {
      itemsContainerStyle: {
        marginVertical: 0,
        backgroundColor: darkMode.containerBgColor
      },
      iconContainerStyle: {
        opacity: 1
      },
      labelStyle: {
        color: darkMode.textColor
      },
      activeLabelStyle: {
        color: darkMode.brandPrimary
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
