import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('menu')}>
          <Text style={styles.boton}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Mis tarjetas</Text>
      </View>
      
      <View style={styles.tarj}>
        <Text style={styles.visa}>Visa</Text>
        <Text style={styles.numTarj}>******0902</Text>
        <Text style={styles.vige}>12/2035</Text>
      </View>
      
      <View style={styles.tarjN}>
        <Text style={styles.visaN}>BBVA</Text>
        <Text style={styles.numTarjN}>******1271</Text>
        <Text style={styles.vigeN}>02/2050</Text>
      </View>
      
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnT}>AÑADIR TARJETA</Text>
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
  boton: {
    fontSize: 24,
    color: 'white',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tarj: {
    backgroundColor: '#293628',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  visa: {
    color: 'gold',
    fontWeight: 'bold',
  },
  numTarj: {
    color: 'white',
    fontSize: 18,
  },
  vige: {
    color: 'white',
  },
  tarjN: {
    backgroundColor: '#EDEDD8',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  visaN: {
    color: 'gray',
    fontWeight: 'bold',
  },
  numTarjN: {
    color: 'gray',
    fontSize: 18,
  },
  vigeN: {
    color: 'gray',
  },
  btn: {
    backgroundColor: '#9DA65D',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  btnT: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserScreen;
