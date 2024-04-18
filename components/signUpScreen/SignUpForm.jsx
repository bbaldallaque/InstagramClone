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

const SignUpForm = ({navigation}) => {
  const SignUpFormScheme = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 charactere'),
    userName: Yup.string().required().min(2, 'the userName is required')
  });

  const onLogin = async (email, password) => {
    try {
      // const result = serverApi.login(email, password);
      // if (result) {
      //   navigation.push('HomeScreen');
      // }

      navigation.push('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: '', userName: ''}}
        onSubmit={values => {
          onLogin(values.email, values.password, values.userName);
        }}
        ty
        validationSchema={SignUpFormScheme}
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
                placeholder="Email"
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
                    1 > values.userName.length || values.userName.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Username"
                color="black"
                keyboardType="email-address"
                textContentType="emailAddress"
                outoFocus={true}
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
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
              {/* <TouchableOpacity>
                <Text style={styles.textColor}>Forgot password</Text>
              </TouchableOpacity> */}
            </View>
            <Pressable style={styles.button(isValid)}
             onPress={handleSubmit}
             disabled={!isValid}
             >
              
              <Text style={{fontSize: 25 , color: 'white' }}>Sign Up</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.textColor}>Already have an account?</Text>

            

              <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                <Text style={styles.textColor}> </Text>
              </TouchableOpacity>



              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textColor}> Log In</Text>
              </TouchableOpacity>

            </View>


           

          </>
        )}
      </Formik>
    </View>
  );
};
//  <Text style={styles.textColor}>Log In  </Text> 
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

export default SignUpForm;
