import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-navigation";
import { Headline } from "react-native-paper";
import dateFns from 'date-fns';

import { Sizes } from "../shared";
import { Logo } from "../components";

export class Home extends PureComponent {
  private _date: Date = new Date();

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', bottom: 'never' }}
      >
        <View style={styles.logo}>
          <Logo/>
        </View>

        <Headline>{`Welcome to Contoso\nAdventures App.`}</Headline>

        <View style={styles.time}>
          <Headline style={styles.timeLabel}>Today is:</Headline>
          <Headline style={styles.timeValue}>
            {dateFns.format(this._date, 'MMM DD, YYYY')}
            {'\n'}
            {dateFns.format(this._date, 'HH:mm')}
          </Headline>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.large
  },
  logo: {
    paddingVertical: Sizes.large,
    alignItems: 'center'
  },
  time: {
    marginTop: Sizes.large
  },
  timeLabel: {
    fontWeight: '800'
  },
  timeValue: {}
});