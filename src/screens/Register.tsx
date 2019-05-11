import React, { PureComponent } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Card, TextInput } from "react-native-paper";
import { Formik } from 'formik';
// @ts-ignore
import * as Yup from 'yup';

import { auth0 } from "../api";
import { Sizes } from "../shared";
import { KBAvoidingView, Logo } from '../components';
import { Navigator, ROUTE_HOME } from "../navigation";

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

const RegisterScheme = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!'),
  email: Yup.string()
    .email('Email is not valid!')
    .required('Username is required!'),
  password: Yup.string()
    .min(6, 'Min length is 6')
    .max(16, 'Max length is 16')
    .required('Password is required!')
});

export class Register extends PureComponent {
  private handleSubmit: () => void = () => {
  };

  private submitAction = (values: RegisterPayload) => {
    auth0
      .auth
      .createUser({
        email: values.email,
        username: values.username,
        password: values.password,
        connection: 'Username-Password-Authentication'
      })
      .then(() => Navigator.navigate({ routeName: ROUTE_HOME }))
      .catch((e: Error) => {
        Alert.alert('contoso', e.message);
      });
  };

  public render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'never', bottom: 'never' }}
      >
        <View style={styles.logo}>
          <Logo/>
        </View>
        <KBAvoidingView offset={70}>
          <View style={styles.form}>
            <Card>
              <Card.Content>
                <Formik
                  initialValues={{
                    username: '',
                    email: '',
                    password: '',
                  }}
                  validationSchema={RegisterScheme}
                  onSubmit={this.submitAction}
                  validateOnChange={false}
                  validateOnBlur={true}
                >
                  {({ values, handleChange, handleBlur, errors, handleSubmit }) => {
                    this.handleSubmit = handleSubmit;

                    return (
                      <>
                        <TextInput
                          style={styles.input}
                          label="Username"
                          mode="outlined"
                          autoCapitalize="none"
                          returnKeyType="next"
                          value={values.username}
                          error={!!errors.username}
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                        />
                        <TextInput
                          style={styles.input}
                          label="Email"
                          mode="outlined"
                          autoCapitalize="none"
                          returnKeyType="next"
                          value={values.email}
                          error={!!errors.email}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                        />
                        <TextInput
                          style={styles.input}
                          label="Password"
                          mode="outlined"
                          autoCapitalize="none"
                          secureTextEntry={true}
                          returnKeyType="done"
                          value={values.password}
                          error={!!errors.password}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          onSubmitEditing={handleSubmit}
                        />
                      </>
                    );
                  }}
                </Formik>
              </Card.Content>
              <Card.Actions style={styles.actions}>
                <Button mode="contained" onPress={() => this.handleSubmit()}>Register</Button>
              </Card.Actions>
            </Card>
          </View>
        </KBAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  form: {
    flex: 1,
    paddingHorizontal: Sizes.large,
    justifyContent: 'center'
  },
  input: {
    marginBottom: Sizes.small
  },
  actions: {
    justifyContent: 'flex-end'
  }
});