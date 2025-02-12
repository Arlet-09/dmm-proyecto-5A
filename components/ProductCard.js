import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ product, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Product", { product })}
    >
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>AGREGAR</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  price: { fontSize: 14, color: "#A1B24E", marginVertical: 5 },
  button: {
    backgroundColor: "#A1B24E",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default ProductCard;
