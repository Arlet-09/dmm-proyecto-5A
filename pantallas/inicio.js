import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';

const InicioScreen = ({ navigation }) => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const { agregarAlCarrito, isAuthenticated } = useContext(CartContext);

  useEffect(() => {
    fetch('https://backend-castoxxo-2025.onrender.com/api/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setProductosFiltrados(data);
      })
      .catch(error => console.error('Error al obtener productos:', error));

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.carritoButton}>
          <Ionicons name="cart" size={28} color="white" />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: '#A1B24E' },
      headerTitleStyle: { color: 'white' },
    });
  }, [navigation]);

  const filtrarProductos = (texto) => {
    setBusqueda(texto);
    if (texto.trim() === '') {
      setProductosFiltrados(productos);
    } else {
      const productosFiltrados = productos.filter((item) =>
        item.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados);
    }
  };

  const getProductImage = (nombre) => {
    const images = {
      "doritosnacho": require('../assets/doritos.png'),
      "sabritasoriginal": require('../assets/sabritas.png'),
      "taxisfuego": require('../assets/takis.png'),
      "coca-colaoriginal": require('../assets/coca.png'),
      "pepsi(600ml)": require('../assets/pepsi.png'),
      "jumexnectardemango": require('../assets/jumex.png'),
      "galletasoreo": require('../assets/oreo.png'),
      "palomitasactiimantequilla": require('../assets/palomitas.png'),
      "maruchandecamaron": require('../assets/maruchan.png'),
      "maruchandelimon": require('../assets/maruchanli.png'),
      "default": require('../assets/default.png'),
    };

    const normalizeText = (text) => {
      return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '')
        .toLowerCase();
    };

    const formattedName = normalizeText(nombre);
    return images[formattedName] || images.default;
  };

  return (
    <View style={styles.container}>
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar productos..."
          style={styles.searchInput}
          value={busqueda}
          onChangeText={filtrarProductos}
        />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image 
          source={require('../assets/banner.png')} // Asegúrate de que la ruta sea correcta
          style={styles.bannerImage} 
          resizeMode="cover"
        />
      </View>

      {/* Lista de productos */}
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image 
              source={getProductImage(item.nombre)} 
              style={styles.image} 
              resizeMode="contain"
            />
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.price}>${item.precio}</Text>
            <Button 
              mode="contained" 
              style={styles.button}
              labelStyle={styles.buttonLabel}
              onPress={() => {
                if (isAuthenticated) {
                  agregarAlCarrito(item);
                } else {
                  alert('¡Por favor regístrate primero para agregar productos al carrito!');
                  navigation.navigate('Registro');
                }
              }} 
            >
              Agregar
            </Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    width: '48%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#A1B24E',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#A1B24E',
    borderRadius: 8,
    width: '100%',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  suscripcionContainer: {
    backgroundColor: '#263B20',
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  emailContainer: {
    marginVertical: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  botonSuscribir: {
    backgroundColor: '#A1B24E',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  terminos: {
    color: '#BDBDBD',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#A1B24E',
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  siguenos: {
    color: '#666',
    marginBottom: 15,
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 25,
  },
  banner: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
    height: 150,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});

export default InicioScreen;
