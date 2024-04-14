import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik';

const LoginForm = () => {

  const onLogin = async (email, password) => {

  }


  return (
    <View style={styles.wrapper}>
     <Formik
     initialValues={{}}
     onSumit={values => {
        onLogin()
     }}
     >
    
     {({handleChange, handleBur, handleSumit, values, isValid }) => (
        <>

    <View style={{backgroundColor: 'white', width: 100, height: 100 }}>
    <TextInput  
           PlaceHolderTextColor='Phone number, username or email'

           />
    </View>

          

        </>
     )}
        
     </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 80

    }
})

export default LoginForm