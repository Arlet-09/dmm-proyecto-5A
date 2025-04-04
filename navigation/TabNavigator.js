import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../pantallas/inicio';
import ContactosScreen from '../pantallas/contactanos';
import UsuarioScreen from '../pantallas/UsuarioScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#A1B24E' } }}>
      <Tab.Screen 
        name="Inicio" 
        component={InicioScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name="Usuarios" 
        component={UsuarioScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }}
      />
      
      <Tab.Screen 
        name="Contactos" 
        component={ContactosScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={24} color={color} />
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;


