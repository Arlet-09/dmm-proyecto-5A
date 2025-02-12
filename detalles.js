import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const UserScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>CastOxxo</Text>
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