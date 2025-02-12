import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>COMPRAR AHORA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F2F2E1" },
  image: { width: 200, height: 200, borderRadius: 10 },
  name: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 18, color: "#A1B24E", marginBottom: 20 },
  button: { backgroundColor: "#A1B24E", padding: 15, borderRadius: 5 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  back: { marginTop: 20 },
  backText: { fontSize: 16, color: "blue" },
});

export default ProductScreen;
