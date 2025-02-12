import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('menu')}>
          <Text style={styles.backButton}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Mis direcciones</Text>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.nombre}>Emilia Mernes</Text>
        <Text style={styles.direc}>Estación 143 Col. Tiago Pzk</Text>
        <Text style={styles.cp}>Puebla, Mex. 1820</Text>
      </View>
      
      <View style={styles.infoN}>
        <Text style={styles.nombreN}>Susy R Martínez</Text>
        <Text style={styles.dirN}>Lomas de Angelópolis #43 Col. La Paz</Text>
        <Text style={styles.cpN}>Sn. Marcos 2378</Text>
      </View>
      
      <TouchableOpacity style={styles.addDir}>
        <Text style={styles.addDire}>AÑADIR DIRECCIÓN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2E1',
    padding: 20,
  },
  header: {
    backgroundColor: '#293628',
    padding: 15,
    borderRadius: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    backgroundColor: '#293628',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  backButton: {
    fontSize: 24,
    color: 'white',
  },
  nombre: {
    color: 'gold',
    fontWeight: 'bold',
  },
  direc: {
    color: 'white',
    fontSize: 18,
  },
  cp: {
    color: 'white',
  },
  infoN: {
    backgroundColor: '#EDEDD8',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  nombreN: {
    color: 'gray',
    fontWeight: 'bold',
  },
  dirN: {
    color: 'gray',
    fontSize: 18,
  },
  cpN: {
    color: 'gray',
  },
  addDir: {
    backgroundColor: '#9DA65D',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  addDire: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserScreen;
