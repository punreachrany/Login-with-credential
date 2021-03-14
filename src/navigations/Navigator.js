import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";
import BSALoginWebview from "../screens/BsaLoginWebview";

const createStackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    BSALoginWebview: {
      screen: BSALoginWebview,
    },
  },
  {
    defaultNavigationOptions: createStackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);
