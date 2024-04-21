import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderProfile from '../../components/profile/HeaderProfile'
import StorieProfile from '../../components/profile/StorieProfile'


const ProfileScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
 <HeaderProfile />
 <View  style={styles.profile} >
 <StorieProfile />
 </View >
 
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    profile: {
      marginTop: 10
    }
})



export default ProfileScreen