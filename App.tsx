import React, { PureComponent } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation, { Navigator } from "./src/navigation";

export default class App extends PureComponent {
  render() {
    return (
      <PaperProvider>
        <Navigation ref={Navigator.init}/>
      </PaperProvider>
    );
  }
}