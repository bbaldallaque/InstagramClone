import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
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
});

export default SplashScreen;
