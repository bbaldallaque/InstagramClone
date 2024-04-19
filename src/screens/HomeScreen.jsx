import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';
import {POSTS} from '../../data/post';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native-elements';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
  
    <Tab.Navigator
      initialRouteName="Profile"
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarLabel: () => null,
      }}>



<Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
          <Image style={style.iconSize} source={focused ? require('../../assets/home_icon.png') : require('../../assets/home_inactive_icon.png') }/>
        
          ),
        }}
        
      />
      <Tab.Screen name="Search" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
          <Image style={style.iconSize} source={focused ? require('../../assets/search_active_icon.png') : require('../../assets/search_inactive_icon.png')} />
        
          ),
        }}
        
      />
      <Tab.Screen name="Add" component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
          <Image style={style.iconSize} source={require('../../assets/plus_icon.png')} />
        
          ),
        }}
        
        
      />

     <Tab.Screen name="Reels" component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
          <Image style={style.iconSize} source={focused ? require('../../assets/instagram_reels_active_icon.png') : require('../../assets/instagram_reels_inactive_icon.png')} />
        
          ),
        }}
        
        
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
          <Image source={{uri: 'https://i.pravatar.cc/150?img=3'}} style={[style.iconSize, style.ProfilerPic(focused)]} />
        
          ),
        }}
        
      />



</Tab.Navigator>

  );
}

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
  iconSize: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginLeft: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  ProfilerPic:  (focused) => (
    {
       borderRadius: 50,
       borderWidth: focused === true ? 2 : 0,
       borderColor: '#fff'
    }
  )
});
export default BottomTabs;
