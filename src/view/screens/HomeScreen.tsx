import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Hola Mundo</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen