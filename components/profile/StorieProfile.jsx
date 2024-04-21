import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const StorieProfile = () => {
  return (
    <View
 style={styles.container}     >
      
      <LinearGradient
                colors={['#F2703F', '#E35157', '#CA1D7E']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}>
                <Image source={{ uri: 'https://i.pravatar.cc' }} style={styles.story} />
            </LinearGradient>

            <Text style={{ color: 'white', fontWeight: '600' }}>{
                'bryantstewart24'
            }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  storyGradient: {
    height: 82,
    width: 82,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 82 / 2,
    margin: 5,
  },
  story: {
    width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#000',
        borderWidth: 2,
  },
  container:
  {
   
    alignItems: 'flex-start',
    margin: 10
  }
});

export default StorieProfile;
