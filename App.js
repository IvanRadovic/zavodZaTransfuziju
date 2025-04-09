import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

/*=========== NAVIGATION ============*/
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
