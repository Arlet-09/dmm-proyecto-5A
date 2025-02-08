import { Text, View, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';

const MenuScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text> Menu Screen</Text>
      <Button
    mode="contained"
    onPress= {()=> navigation.navigate('details')}>
    Ir a detalles
    </Button>
    
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
