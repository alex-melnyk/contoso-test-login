import React, { StatelessComponent } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { Sizes } from "../shared";

interface Props {
  label: string;
  onPress?: () => void;
}

export const HeaderLogoutButton: StatelessComponent<Props> = ({ label, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress && onPress()}
  >
    <Text>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.middle
  }
});