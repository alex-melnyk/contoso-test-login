import React, { StatelessComponent } from 'react';
import { Image, StyleSheet } from "react-native";
// @ts-ignore
import LogoImage from '../assets/images/Logo.png';

interface Props {
  style?: Object;
}

export const Logo = ({ style }: Props) => (
  <Image
    style={[styles.image, style]}
    source={LogoImage}
  />
);

const styles = StyleSheet.create({
  image: {
    width: 162,
    height: 66
  }
});