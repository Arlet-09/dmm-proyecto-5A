import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';

const ContactosScreen = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>¿Cómo podemos ayudarte?</Text>

      <Text style={styles.hours}>Horario de Atención: Lunes a Viernes, 9:00 AM - 21:00 PM</Text>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}> 📞 Contáctanos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2E1', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A1B24E',
    textAlign: 'center',
    marginBottom: 20,
  },
  hours: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
  contactButton: {
    backgroundColor: '#A1B24E', 
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactosScreen;