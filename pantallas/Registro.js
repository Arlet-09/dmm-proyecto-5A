import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const RegistroScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Usamos el hook de navegación

  const handleRegister = async () => {
    // Validación de campos vacíos
=======

const RegistroScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
    if (!username || !email || !password) {
      Alert.alert('¡Error!', 'Por favor, completa todos los campos');
      return;
    }

<<<<<<< HEAD
    try {
      console.log("Enviando solicitud al backend...");
      console.log("Datos a enviar:", { username, email, password });  // Verificar los valores enviados

      const response = await fetch('https://mi-backend.onrender.com/api/users', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);  // Verifica lo que devuelve el servidor

      if (data.success) {
        // Guardar los datos del usuario en AsyncStorage
        await AsyncStorage.setItem('usuario', JSON.stringify({ nombre: username, email }));

        Alert.alert('¡Registro exitoso!', 'Bienvenido a la tienda', [
          { text: 'OK', onPress: () => navigation.replace('Inicio') }, // Redirige al inicio después de un registro exitoso
        ]);

        // Limpiar los campos de entrada
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('¡Error!', data.message || 'Hubo un problema con el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      Alert.alert('¡Error!', 'No se pudo completar el registro');
    }
=======
    // Aquí puedes hacer una petición al backend para guardar el usuario
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('¡Registro exitoso!', 'Bienvenido a la tienda');
          navigation.navigate('Inicio');
        } else {
          Alert.alert('¡Error!', data.message || 'Hubo un problema con el registro');
        }
      })
      .catch(error => {
        console.error('Error en el registro:', error);
        Alert.alert('¡Error!', 'No se pudo completar el registro');
      });
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

<<<<<<< HEAD
=======
      {/* Botón de registro estilizado */}
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
      <TouchableOpacity style={styles.botonRegistro} onPress={handleRegister}>
        <Text style={styles.botonTexto}>Registrar</Text>
      </TouchableOpacity>

<<<<<<< HEAD
=======
      {/* Botón de volver al inicio */}
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
      <TouchableOpacity style={styles.botonVolver} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.botonVolverTexto}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F2F2E1',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  botonRegistro: {
    backgroundColor: '#A1B24E',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botonTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  botonVolver: {
    backgroundColor: '#888',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botonVolverTexto: {
    fontSize: 16,
    color: '#fff',
  },
});

export default RegistroScreen;
