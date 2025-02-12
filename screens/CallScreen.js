import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Llamada</Text>
      <Text style={styles.info}>Aquí podrás realizar llamadas</Text>
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
  info: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default CallScreen;
