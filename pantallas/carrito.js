import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import { CartContext } from '../context/CartContext';

const CarritoScreen = ({ navigation }) => {
  const { carrito, eliminarDelCarrito, isAuthenticated } = useContext(CartContext);
  const [loading, setLoading] = useState(false); // Para gestionar la carga durante la compra
  const [error, setError] = useState(null); // Para gestionar posibles errores en la compra

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  const finalizarCompra = () => {
    if (!isAuthenticated) {
      Alert.alert(
        '¡Atención!',
        'Para realizar la compra necesitas registrarte.',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Ir a Registro', onPress: () => navigation.navigate('Registro') },
        ]
      );
      return; // No continua con la compra si no está registrado
    }
  
    setLoading(true); // Iniciar el estado de carga
  
    fetch('https://backend-castoxxo-2025.onrender.com/comprar', { 
      method: 'POST', 
      body: JSON.stringify(carrito),
      headers: { 'Content-Type': 'application/json' }
    })
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

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
  emptyMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 5,
  },
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
