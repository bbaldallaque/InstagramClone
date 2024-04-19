import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderProfile from '../../components/profile/HeaderProfile'


const ProfileScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
 <HeaderProfile />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'

    }
})

export default ProfileScreen