import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ContactosScreen from '../pantallas/contactanos'; 
import { Ionicons } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
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
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> 
        }}
      />
      <Drawer.Screen 
        name="Contactos" 
        component={ContactosScreen} 
        options={{
          drawerIcon: ({ color }) => <Ionicons name="call" size={24} color={color} /> 
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;