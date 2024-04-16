import * as Yup from 'yup';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

const LoginForm = () => {
  const LoginFormScheme = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 6 charactere'),
  });

  const onLogin = async (email, password) => {};

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          onLogin();
        }}
        ty
        validationSchema={LoginFormScheme}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputFiled,
                {
                  borderColor:
                    1 > values.email.length || values.email.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Phone number, username or email"
                color="black"
                keyboardType="email-address"
                textContentType="emailAddress"
                outoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputFiled,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Password"
                color="black"
                textContentType="password"
                outoFocus={false}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <TouchableOpacity>
                <Text style={styles.textColor}>Forgot password</Text>
              </TouchableOpacity>
            </View>
            <Pressable style={styles.button(isValid)}>
              <Text style={styles.textColor}>Log in</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.textColor}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={styles.textColor}> </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputFiled: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 0.5,
  },
  textColor: {
    color: 'white',
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096f6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default LoginForm;
