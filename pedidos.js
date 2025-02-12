import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('menu')}>
          <Text style={styles.backButton}>⬅</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mis pedidos</Text>
      </View>

      <View style={styles.pedido}>
        <View style={styles.detalles}>
          <Text style={styles.numeroPedido}>N°#1</Text>
          <Text style={styles.estado}>Pedido entregado</Text>
          <Text style={styles.fecha}>09/02/2025</Text>
        </View>
        <Text style={styles.precio}>$1,440.50</Text>
      </View>
      
      <View style={styles.pedido}>
        <View style={styles.detalles}>
          <Text style={styles.numeroPedido}>N°#2</Text>
          <Text style={styles.estado}>Pedido enviado</Text>
          <Text style={styles.fecha}>01/01/2025</Text>
        </View>
        <Text style={styles.precio}>$5,000.00</Text>
      </View>
      
      <View style={styles.pedido}>
        <View style={styles.detalles}>
          <Text style={styles.numeroPedido}>N°#3</Text>
          <Text style={styles.estado}>Orden en espera de pago</Text>
          <Text style={styles.fecha}>08/02/2025</Text>
        </View>
        <Text style={styles.precio}>$300.69</Text>
      </View>

      <View style={styles.menuBoton}>
          <Button
            mode="text"
            onPress={() => navigation.navigate('home')}>
            🏠
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate('menu')}>
            👤
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate('details')}>
            📞
          </Button>
        </View>
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
    borderRadius: 10,
  },
  backButton: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pedido: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F8F8E8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detalles: {
    flex: 1,
  },
  numeroPedido: {
    fontSize: 12,
    color: '#555',
  },
  estado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fecha: {
    fontSize: 14,
    color: '#666',
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7BA05B',
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

export default UserScreen;
