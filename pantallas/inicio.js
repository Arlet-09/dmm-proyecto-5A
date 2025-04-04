<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';
=======
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304

const InicioScreen = ({ navigation }) => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
<<<<<<< HEAD
  const { agregarAlCarrito, isAuthenticated } = useContext(CartContext);

  useEffect(() => {
    fetch('https://backend-castoxxo-2025.onrender.com/api/products')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setProductosFiltrados(data);
=======
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('https://backend-castoxxo-2025.onrender.com/api/products')  
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setProductosFiltrados(data); 
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
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

<<<<<<< HEAD
=======
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
  
      "default": require('../assets/default.png'),
    };
  
    // Función para eliminar acentos y espacios
    const normalizeText = (text) => {
      return text
        .normalize("NFD") // Descompone los caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
        .replace(/\s+/g, '') // Elimina espacios
        .toLowerCase(); // Convierte a minúsculas
    };
  
    const formattedName = normalizeText(nombre);
    return images[formattedName] || images.default;
  };

>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
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

<<<<<<< HEAD
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
=======
  const suscribirse = () => {
    if (email.includes('@')) {
      alert(`¡Gracias por suscribirte, ${email}!`);
      setEmail('');
    } else {
      alert('Por favor ingresa un correo válido.');
    }
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
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
<<<<<<< HEAD
        <Image 
          source={require('../assets/banner.png')} // Asegúrate de que la ruta sea correcta
          style={styles.bannerImage} 
          resizeMode="cover"
        />
=======
        <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
        <Text style={styles.bannerText}>¡Conoce nuestras secciones de tienda!</Text>
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
      </View>

      {/* Lista de productos */}
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item._id}
<<<<<<< HEAD
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
=======
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={getProductImage(item.nombre)} style={styles.image} />
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.price}>${item.precio}</Text>
            <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Carrito', { producto: item })}>
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
              Agregar
            </Button>
          </View>
        )}
      />
<<<<<<< HEAD
=======

      {/* Sección de suscripción */}
      <View style={styles.suscripcionContainer}>
        <Text style={styles.suscripcionTexto}>
          ¡Suscríbete para enterarte de nuestras ofertas y novedades! :)
        </Text>
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.botonSuscribir} onPress={suscribirse}>
          <Text style={styles.botonTexto}>SUSCRIBIRME</Text>
        </TouchableOpacity>
        <Text style={styles.terminos}>
          Debes leer el <Text style={styles.link}>aviso de privacidad</Text> antes de continuar.
        </Text>
      </View>

      {/* Redes sociales y términos */}
      <View style={styles.footer}>
        <View style={styles.socialIcons}>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
          <FontAwesome name="instagram" size={30} color="#C13584" />
        </View>
        <Text style={styles.terminos}>Terms and Conditions</Text>
      </View>
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
=======
    backgroundColor: '#F2F2E1',
    padding: 10,
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
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
=======
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#555',
  },
  banner: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    height: 180,
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  },
  bannerImage: {
    width: '100%',
    height: '100%',
<<<<<<< HEAD
=======
    resizeMode: 'cover',
  },
  bannerText: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    flex: 1,
    elevation: 3,
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
  carritoButton: {
    marginRight: 15,
  },
  // Estilos de suscripción
  suscripcionContainer: {
    backgroundColor: '#263B20',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  suscripcionTexto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  botonSuscribir: {
    backgroundColor: '#A1B24E',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  terminos: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
  },
  link: {
    textDecorationLine: 'underline',
  },
  // Redes sociales y términos
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 10,
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  },
});

export default InicioScreen;
