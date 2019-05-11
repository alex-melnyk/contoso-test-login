import React from "react";
import { createStackNavigator } from "react-navigation";

import { ROUTE_AUTH, ROUTE_HOME_MAIN } from "./Routes";
import { Home } from "../screens";
import { HeaderLogoutButton } from "../components";
import { Navigator } from "./Navigator";

export const homeStack = createStackNavigator({
  [ROUTE_HOME_MAIN]: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: 'Home',
      headerRight: (
        <HeaderLogoutButton
          label="Logout"
          onPress={() => Navigator.navigate({ routeName: ROUTE_AUTH })}
        />
      )
    })
  }
}, {
  initialRouteName: ROUTE_HOME_MAIN,
  headerMode: "screen"
});