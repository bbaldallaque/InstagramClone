import { View, Text } from 'react-native'
import React from 'react'

const ProfileDashboard = () => {
  return (
    <View>
      <Text>ProfileDashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 60
    },
    textStyle: {
        color: 'white',
        fontSize: 15
    },
    textContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    }
})

export default ProfileDashboard