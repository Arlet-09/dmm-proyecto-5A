import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('menu')}>
          <Text style={styles.backButton}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Regresar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nombre: </Text>
        <View style={styles.input} />

        <Text style={styles.label}>Apellido: </Text>
        <View style={styles.input} />

        <Text style={styles.label}>Correo electrónico: </Text>
        <View style={styles.input} />

        <Text style={styles.label}>Fecha de nacimiento: </Text>
        <View style={styles.input} />

        <Text style={styles.label}>Número de teléfono:</Text>
        <View style={styles.input} />
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>RESTABLECER CONTRASEÑA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>BORRAR MI CUENTA</Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.saveButton} onPress={() => navigation.navigate('menu')}>
        GUARDAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2E1',
    padding: 20,
  },
  header: {
    backgroundColor: '#293628',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    height: 40,
    marginBottom: 15,
  },
  link: {
    color: '#7BA05B',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#7BA05B',
    marginTop: 20,
    padding: 10,
  },
});

export default UserScreen;
