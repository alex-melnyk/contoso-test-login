import React, { StatelessComponent } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleProp, TouchableWithoutFeedback, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: Element;
  offset?: number;
}

export const KBAvoidingView: StatelessComponent<Props> = ({ style, children, offset }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      keyboardVerticalOffset={offset}
    >
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);