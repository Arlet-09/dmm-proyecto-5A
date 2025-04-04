import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ContactosScreen from '../pantallas/contactanos';
import CarritoScreen from '../pantallas/carrito';
import RegistroScreen from '../pantallas/Registro';
import UsuarioScreen from '../pantallas/UsuarioScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
=======
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [usuario, setUsuario] = useState(null); // Estado para almacenar el usuario
<<<<<<< HEAD
  const navigation = useNavigation(); // Hook de navegación
=======
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304

  useEffect(() => {
    const cargarUsuario = async () => {
      const userData = await AsyncStorage.getItem('usuario');
      console.log('userData desde AsyncStorage: ', userData); // Verificar si los datos se cargan correctamente
      if (userData) {
        setUsuario(JSON.parse(userData));
      } else {
        setUsuario(null);
<<<<<<< HEAD
        navigation.navigate('Registro'); // Redirigir a la pantalla de registro si no hay usuario
      }
    };
    cargarUsuario();
  }, [navigation]); // Dependencia de navigation para asegurar que se navegue al cargar
=======
      }
    };
    cargarUsuario();
  }, []);
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#A1B24E',
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Contactos"
        component={ContactosScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="call" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={CarritoScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="cart" size={24} color={color} />,
        }}
      />
      {/* Mostrar la opción de Usuario solo si hay un usuario registrado */}
      {usuario && (
        <Drawer.Screen
          name="Usuario"
          component={UsuarioScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          }}
        />
      )}
      {/* Mostrar la opción de Registro solo si no hay un usuario registrado */}
      {!usuario && (
        <Drawer.Screen
          name="Registro"
          component={RegistroScreen}
          options={{
            drawerIcon: ({ color }) => <Ionicons name="person-add" size={24} color={color} />,
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

<<<<<<< HEAD
export default DrawerNavigator;
=======
export default DrawerNavigator;
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
