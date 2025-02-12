import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import UserDetailsScreen from "./screens/UserDetailsScreen"; // Pantalla de detalles de usuario
import CallScreen from "./screens/CallScreen"; // Pantalla de llamada

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// 📌 Stack Navigator para la sección de "Inicio"
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
);

// 📌 Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Inicio" component={HomeStack} />
    <Drawer.Screen name="Detalles" component={UserDetailsScreen} />
  </Drawer.Navigator>
);

// 📌 Tab Navigator (Barra inferior con pestañas)
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Inicio") {
              return <Text style={{ fontSize: 24 }}>🏠</Text>;
            } else if (route.name === "Perfil") {
              return <Text style={{ fontSize: 24 }}>👤</Text>;
            } else if (route.name === "Llamada") {
              return <Text style={{ fontSize: 24 }}>📞</Text>;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#A1B24E",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Inicio" component={DrawerNavigator} />
        <Tab.Screen name="Perfil" component={UserDetailsScreen} />
        <Tab.Screen name="Llamada" component={CallScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
