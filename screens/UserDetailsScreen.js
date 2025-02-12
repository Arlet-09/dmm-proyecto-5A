import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text style={styles.detail}>Nombre: John Doe</Text>
      <Text style={styles.detail}>Correo: john.doe@example.com</Text>
      {/* Puedes agregar más detalles según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2E1",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default UserDetailsScreen;
