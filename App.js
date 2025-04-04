import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import DrawerNavigator from './navigation/drawerNavigator'; 
import { CartProvider } from './context/CartContext'; 

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
=======
import DrawerNavigator from './navigation/drawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
>>>>>>> 80b206326f9efa10e307831228efe4f91ca30304
  );
}
