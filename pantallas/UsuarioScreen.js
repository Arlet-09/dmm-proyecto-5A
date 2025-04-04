import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import RegistroScreen from './Registro';


const UsuarioScreen = () => {
  const [usuario, setUsuario] = useState(null); // Establecer el estado inicial en null
  const navigation = useNavigation();

  useEffect(() => {
    const cargarUsuario = async () => {
      const userData = await AsyncStorage.getItem('usuario');
      if (userData) {
        setUsuario(JSON.parse(userData)); // Si hay datos, los guarda en el estado
      } else {
        setUsuario(null); // Si no hay datos, se asegura de que usuario sea null
      }
    };
    cargarUsuario();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  // Lógica para cerrar sesión
  const cerrarSesion = async () => {
    await AsyncStorage.removeItem('usuario');
    alert('Sesión cerrada');
    navigation.replace('Registro'); // Redirige a la pantalla de login
  };

  return (
    <View style={styles.container}>
      {/* Si el usuario está registrado */}
      {usuario ? (
        <>
          {/* Encabezado */}
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {usuario.nombre.charAt(0).toUpperCase()}
                {usuario.apellido.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text style={styles.nombre}>Hola, {usuario.nombre} {usuario.apellido}</Text>
          </View>

          {/* Opciones de usuario */}
          <View style={styles.menu}>
            <MenuItem titulo="Mis pedidos" icon="📦" />
            <MenuItem titulo="Mis detalles" icon="👤" />
            <MenuItem titulo="Mis direcciones" icon="📍" />
            <MenuItem titulo="Mis tarjetas" icon="💳" />
            <MenuItem titulo="Cerrar sesión" icon="🚪" onPress={cerrarSesion} />
          </View>
        </>
      ) : (
        // Si el usuario no está registrado
        <>
          <Text style={styles.textoNoRegistrado}>¡Bienvenido a la sección de Usuario!</Text>
          <Text style={styles.textoNoRegistrado}>Regístrate para tener más funciones</Text>

          <TouchableOpacity style={styles.botonRegistro} onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.botonTexto}>Registrarme</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const MenuItem = ({ titulo, icon, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuText}>{icon} {titulo}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2E1' },
  header: { alignItems: 'center', padding: 20, backgroundColor: '#2C3E3E' },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#2C3E3E' },
  nombre: { color: '#FFF', fontSize: 18, marginTop: 10 },
  menu: { padding: 20 },
  menuItem: { padding: 15, backgroundColor: '#FFF', marginVertical: 5, borderRadius: 10 },
  menuText: { fontSize: 16, fontWeight: '500' },

  // Estilos cuando el usuario no está registrado
  textoNoRegistrado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  botonRegistro: {
    padding: 10,
    backgroundColor: '#A1B24E',
    borderRadius: 5,
    marginTop: 20,
  },
  botonTexto: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2E1', 
    padding: 20,
  },
});

export default UsuarioScreen;
