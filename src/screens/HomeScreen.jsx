import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';
import {POSTS} from '../../data/post';

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Stories />
      <ScrollView>
      {POSTS.map((post, index) => (
        <Post post={post} key={index} />
      ))}
        </ScrollView>
    
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default HomeScreen;