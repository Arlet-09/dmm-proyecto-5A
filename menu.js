import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CastOxxo</Text>
      </View>
      
      <View style={styles.contPerfil}>
        <View style={styles.fotoPerfil}>
          <Text style={styles.perfilUser}>:)</Text>
        </View>
        <Text style={styles.saludo}>Buen día</Text>
        <Text style={styles.username}>@user</Text>
      </View>

      <View style={styles.funciones}>
        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('pedidos')}>
          🛍️ Mis pedidos
        </Button>
        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('user')}>
          👤 Mis detalles
        </Button>
        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('casa')}>
          🏠 Mis direcciones
        </Button>
        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('tarjetas')}>
          💳 Mis tarjetas
        </Button>
      </View>

      <Button
        mode="text"
        labelStyle={styles.textoBoton}
        onPress={() => navigation.navigate('home')}>
        🚪 Cerrar sesión
      </Button>

      <View style={styles.menuBoton}>
        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('home')}>
          🏠
        </Button>

        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('menu')}>
          👤
        </Button>

        <Button
          mode="text"
          labelStyle={styles.textoBoton}
          onPress={() => navigation.navigate('details')}>
          📞
        </Button>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2E1',
  },
  header: {
    backgroundColor: '#293628',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contPerfil: {
    backgroundColor: '#2E3D29',
    alignItems: 'center',
    paddingVertical: 30,
  },
  fotoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilUser: {
    color: '#aaaaaa',
    fontSize: 24,
    fontWeight: 'bold',
  },
  saludo: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  funciones: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textoBoton: {
    color: '#293628',
    fontSize: 16,
  },
  menuBoton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2E3D29',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
