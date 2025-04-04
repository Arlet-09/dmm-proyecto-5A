import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert } from 'react-native';

const CarritoScreen = ({ route, navigation }) => {
  const [carrito, setCarrito] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado para verificar si el usuario está autenticado

  useEffect(() => {
    if (route.params?.producto) {
      // Verificamos si el producto ya está en el carrito
      setCarrito(prevCarrito => [...prevCarrito, route.params.producto]);
    }

    // Aquí podrías verificar el estado de autenticación del usuario
    setIsAuthenticated(true);  // Si el usuario está autenticado
    setIsAuthenticated(false); // Si no está autenticado
    
  }, [route.params]);

  const eliminarProducto = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
  };

  const finalizarCompra = () => {
    if (!isAuthenticated) {
      // Si el usuario no está autenticado, redirigir a la pantalla de registro
      Alert.alert(
        '¡Atención!',
        'Para realizar la compra necesitas registrarte.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Ir a Registro', onPress: () => navigation.navigate('Registro') },
        ],
        { cancelable: false }
      );
      return;
    }

    // Si el usuario está autenticado, proceder con la compra
    fetch('http://localhost:5000/comprar', { 
      method: 'POST', 
      body: JSON.stringify(carrito),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Compra realizada:', data);
        // Redirigir al inicio después de finalizar la compra
        navigation.navigate('Inicio');  
      })
      .catch(error => console.error('Error en la compra:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      {/* Lista de productos en el carrito */}
      <FlatList
        data={carrito}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre} - {item.precio}</Text>
            <Button
              title="Eliminar"
              color="#FF6347"
              onPress={() => eliminarProducto(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Usamos el id para identificar cada producto
      />

      {/* Botón para finalizar compra */}
      <Button
        title="Finalizar Compra"
        color="#A1B24E"
        onPress={finalizarCompra}
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 5,
  },
});

export default CarritoScreen;

