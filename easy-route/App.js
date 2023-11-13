import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

var MapView = require('react-native-maps');

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
