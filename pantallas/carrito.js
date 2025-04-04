<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import { CartContext } from '../context/CartContext';

const CarritoScreen = ({ navigation }) => {
  const { carrito, eliminarDelCarrito, isAuthenticated } = useContext(CartContext);
  const [loading, setLoading] = useState(false); // Para gestionar la carga durante la compra
  const [error, setError] = useState(null); // Para gestionar posibles errores en la compra

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0).toFixed(2);
=======
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
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  };

  const finalizarCompra = () => {
    if (!isAuthenticated) {
<<<<<<< HEAD
=======
      // Si el usuario no está autenticado, redirigir a la pantalla de registro
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
      Alert.alert(
        '¡Atención!',
        'Para realizar la compra necesitas registrarte.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Ir a Registro', onPress: () => navigation.navigate('Registro') },
<<<<<<< HEAD
        ]
      );
      return; // No continua con la compra si no está registrado
    }
  
    setLoading(true); // Iniciar el estado de carga
  
    fetch('https://backend-castoxxo-2025.onrender.com/comprar', { 
=======
        ],
        { cancelable: false }
      );
      return;
    }

    // Si el usuario está autenticado, proceder con la compra
    fetch('http://localhost:5000/comprar', { 
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
      method: 'POST', 
      body: JSON.stringify(carrito),
      headers: { 'Content-Type': 'application/json' }
    })
<<<<<<< HEAD
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        Alert.alert('¡Compra exitosa!', 'La compra se ha guardado correctamente.');
        setLoading(false);
        navigation.navigate('Inicio');  // Regresa a la pantalla de inicio después de la compra
      } else {
        Alert.alert('¡Error!', 'Hubo un problema al guardar la compra.');
        setLoading(false);
      }
    })
    .catch(error => {
      console.error('Error en la compra:', error);
      setError('Ocurrió un error al procesar la compra. Intenta nuevamente.');
      setLoading(false);
    });
=======
      .then(response => response.json())
      .then(data => {
        console.log('Compra realizada:', data);
        // Redirigir al inicio después de finalizar la compra
        navigation.navigate('Inicio');  
      })
      .catch(error => console.error('Error en la compra:', error));
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

<<<<<<< HEAD
      {carrito.length === 0 ? (
        <Text style={styles.emptyMessage}>No hay productos en el carrito.</Text>
      ) : (
        <FlatList
          data={carrito}
          keyExtractor={(item) => item._id.toString()} 
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.nombre} - ${item.precio}</Text>
              <Button
                title="Eliminar"
                color="#FF6347"
                onPress={() => eliminarDelCarrito(item._id)} // Eliminar producto por su id
              />
            </View>
          )}
        />
      )}

      {error && <Text style={styles.errorMessage}>{error}</Text>}

      <Text style={styles.total}>Total: ${calcularTotal()}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#A1B24E" />
      ) : (
        <Button
          title="Finalizar Compra"
          color="#A1B24E"
          onPress={finalizarCompra}
        />
      )}
=======
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
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
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
<<<<<<< HEAD
  emptyMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
=======
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 5,
  },
<<<<<<< HEAD
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A1B24E',
    marginTop: 20,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CarritoScreen;
=======
});

export default CarritoScreen;

>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
