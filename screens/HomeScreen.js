import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, ImageBackground } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const botanas = [
    { id: 1, name: "Doritos", price: "1.80", image: require("../assets/cheetos.webp") },
    { id: 2, name: "Cheetos", price: "4.80", image: require("../assets/dooritos.png") },
  ];

  const bebidas = [
    { id: 3, name: "Coca-Cola", price: "2.00", image: require("../assets/coca_zero.jpg") },
    { id: 4, name: "Pepsi", price: "1.90", image: require("../assets/delaware.webp") },
  ];

  const dulces = [
    { id: 5, name: "Hershey's", price: "3.50", image: require("../assets/hersheys.webp") },
    { id: 6, name: "M$M", price: "2.80", image: require("../assets/m$ms.webp") },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Inicio",
      headerLeft: () => (
        <Text style={{ fontSize: 24, marginLeft: 10 }}>🏠</Text>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Fondo del logo difuminado */}
      <ImageBackground source={require("../assets/CastOxxo_Logo.png")} style={styles.logoBackground} blurRadius={10}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="¿Qué deseas buscar?"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </ImageBackground>

      {/* Sección de Botanas */}
      <Text style={styles.title}>Botanas y Snacks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsContainer}>
        {botanas.map((product) => (
          <ProductCard key={product.id} product={product} navigation={navigation} />
        ))}
      </ScrollView>

      {/* Sección de Bebidas */}
      <Text style={styles.title}>Bebidas</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsContainer}>
        {bebidas.map((product) => (
          <ProductCard key={product.id} product={product} navigation={navigation} />
        ))}
      </ScrollView>

      {/* Sección de Dulces */}
      <Text style={styles.title}>Dulces y Chocolates</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productsContainer}>
        {dulces.map((product) => (
          <ProductCard key={product.id} product={product} navigation={navigation} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2E1",
    paddingTop: 40,
  },

  logoBackground: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  searchContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    marginHorizontal: "5%", // Center search bar
  },

  search: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#293628",
    padding: 10,
    textAlign: "center",
    marginVertical: 10,
  },

  productsContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 15,
    justifyContent: "center", // Center products
    marginBottom: 20,
  },
});

export default HomeScreen;
