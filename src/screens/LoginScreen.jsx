import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import LoginForm from '../../components/home/loginScreen/LoginForm';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoConatiner}>
        <Image source={require('../../assets/instagram_logo_new.png')} style={{width: 80, height: 80 }} />
      
      </View>
    <LoginForm  navigation={navigation} />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoConatiner: {
    alignItems: 'center',
    marginTop: 60
  }
});

export default LoginScreen;
