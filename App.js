import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

/*=========== NAVIGATION ============*/
import AppNavigation from './src/navigation/AppNavigation';
import { store } from './src/store/store';
import { toastConfig } from './src/hooks/toastMessage';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
        <Toast config={toastConfig} />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
