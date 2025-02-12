import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const productos = [
  { id: '1', nombre: 'Pepino', precio: '1,80 €', imagen: require('../assets/pepinos.png') },
  { id: '2', nombre: 'Tomate', precio: '4,80 €', imagen: require('../assets/tomates.png') },
];

const InicioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frutas y Verduras</Text>
      <FlatList
        data={productos}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.price}>{item.precio}</Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Carrito', { producto: item })}
              style={styles.button}
            >
              Agregar
            </Button>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2E1',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A1B24E',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#A1B24E',
  },
});

export default InicioScreen;

