import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({navigation}) => {

const isSigned = false;

// es lo primerop que se ejecutra cuando el componente se crea
// y simulara la carga de informacion 
// useEffect(() => {
//   navigation.push("LoginScreen")
//  })

//simulacion de carga de data
 useEffect(() => {
  const timer = setTimeout(() => {
    navigation.push("LoginScreen")
   
     if(isSigned) {
      navigation.push("HomeScreen")
     } else {
      navigation.push("LoginScreen")
     }


  }, 2000)
  return() => clearTimeout(timer)
 },[navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <Image source={require('../../assets/instagram_logo_new.png')} style={{width: 90, height: 90}}/>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text style={{color: 'gray', fontSize: 16, margin: -30}}>From</Text>
        <Image source={require('../../assets/meta_logo.png')} style={styles.metaLogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  metaLogo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    margin: 0
}

});

export default SplashScreen;
