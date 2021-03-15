import BSALoginWebview from "../screens/BsaLoginWebview";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const createStackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    BSALoginWebview: {
      screen: BSALoginWebview,
      navigationOptions: {
        headerShown: true,
        title: "BSA Login",
      },
    },
  },
  {
    defaultNavigationOptions: createStackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);
