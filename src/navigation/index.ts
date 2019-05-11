import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ROUTE_AUTH, ROUTE_HOME } from "./Routes";
import { authStack } from "./authStack";
import { homeStack } from "./homeStack";

export * from './Navigator';
export * from './Routes';

const baseNavigator = createSwitchNavigator({
  [ROUTE_AUTH]: authStack,
  [ROUTE_HOME]: homeStack,
}, {
  initialRouteName: ROUTE_AUTH
});

export default createAppContainer(baseNavigator);