import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';


const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
    <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}} >Bryant Stewart</Text>
      </TouchableOpacity>
      <View style={styles.iconsConteiner}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/plus_icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>     
          <Image
            style={styles.icon} source={require('../../assets/list_icon.png')}/>
        </TouchableOpacity>
      </View>     
    </View>
  );
};




//Alinear los componentes de una misma linea, hijos en diferentes padres
const styles = StyleSheet.create({

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
    margin: 5,
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
export default HeaderProfile;
