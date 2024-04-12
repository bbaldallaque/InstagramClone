import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {USERS} from '../../data/users';

const Stories = () => {
  return (
    <View
      style={{
        marginBottom: 13,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <LinearGradient colors={['#F2703F', '#E35157', '#CA1D7E']}
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={styles.storyGradient}>
                <Image style={styles.story} source={{ uri: story.image}} />

            </LinearGradient>
            <Text style={{color: 'white'}}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        )
        
        )}
      </ScrollView>
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
    borderRadius: 75,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
});

export default Stories;
