import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

const CarritoScreen = ({ route }) => {
  const [carrito, setCarrito] = useState([]);

  React.useEffect(() => {
    if (route.params?.producto) {
      setCarrito([...carrito, route.params.producto]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={carrito}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre} - {item.precio}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button mode="contained" style={styles.button}>Finalizar Compra</Button>
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#A1B24E',
  },
});

export default CarritoScreen;
