import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pantallas/home';
import DetailScreen from '../pantallas/detalles';
import MenuScreen from '../pantallas/menu';
import PedScreen from '../pantallas/pedidos';
import UserScreen from '../pantallas/user';
import CasaScreen from '../pantallas/casa';
import TarjetasScreen from '../pantallas/tarjetas';

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
        <Drawer.Screen
          name="pedidos"
          component={PedScreen}
          options={{ title: 'Pedidos' }}
        />
        <Drawer.Screen
          name="user"
          component={UserScreen}
          options={{ title: 'Ajustes de usuario' }}
        />
        <Drawer.Screen
          name="casa"
          component={CasaScreen}
          options={{ title: 'Mis direcciones' }}
        />
        <Drawer.Screen
          name="tarjetas"
          component={TarjetasScreen}
          options={{ title: 'Mis tarjetas' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
