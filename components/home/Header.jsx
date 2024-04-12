import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/instagram_logo_name.png')} />
      </TouchableOpacity>
      <View style={styles.iconsConteiner}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/heart_icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon} source={require('../../assets/facebook_messenger_icon.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Alinear los componentes de una misma linea, hijos en diferentes padres
const styles = StyleSheet.create({
  //logo
  logo: {
    width: 120,
    height: 50,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  //alinear logo
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  iconsConteiner: {
    flexDirection: 'row',
  },
  //iconos
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginLeft: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  //notificaciones
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
  //alinear las notificaciones y
  unreadBadge: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 100,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    bottom: 18,
  },
});
export default Header;
