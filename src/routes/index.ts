import { createAppContainer, createStackNavigator } from "react-navigation";
import { DetailScreen } from "../screens/detail_screen";
import { HomeScreen } from "../screens/home_screen";
import { ModalScreen } from "../screens/modal_screen";

export enum ROUTES {
  RootMain = "RootMain",
  RootModal = "RootModal",
  RootDetails = "RootDetails",
  ModalMain = "ModalMain",
  MainHome = "MainHome",
  MainDetails = "MainDetails"
}

// The stack for the modal
const ModalStack = createStackNavigator({
  [ROUTES.ModalMain]: {
    screen: ModalScreen
  }
});

// The stack for the main navigation
const MainStack = createStackNavigator({
  [ROUTES.MainHome]: {
    screen: HomeScreen
  },
  [ROUTES.MainDetails]: {
    screen: DetailScreen
  }
});

// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.RootMain]: {
      screen: MainStack
    },
    [ROUTES.RootModal]: {
      screen: ModalStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
