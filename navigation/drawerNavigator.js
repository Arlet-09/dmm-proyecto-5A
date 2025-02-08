import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pantallas/inicio';
import DetailScreen from '../pantallas/detalles';
import MenuScreen from '../pantallas/menu';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Drawer.Screen
          name="details"
          component={DetailScreen}
          options={{ title: 'Detalles' }}
        />
        <Drawer.Screen
          name="menu"
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
