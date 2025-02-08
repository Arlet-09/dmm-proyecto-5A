import { Text, View, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
      <Button
    mode="contained"
    onPress= {()=> navigation.navigate('menu')}>
    Ir a menú
    </Button>
  </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
