import { createStackNavigator } from "react-navigation";
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_REGISTER } from "./Routes";
import { Login } from "../screens";
import { Register } from "../screens/Register";

export const authStack = createStackNavigator({
  [ROUTE_AUTH_LOGIN]: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: 'Login'
    })
  },
  [ROUTE_AUTH_REGISTER]: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Registration',
    })
  },
}, {
  initialRouteName: ROUTE_AUTH_LOGIN,
  headerMode: "screen"
});