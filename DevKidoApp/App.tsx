/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Text} from 'react-native';
import { SafeAreaProvider,  useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      {/* WebView pointed to https://devkido.com */}
      <WebView
        source={{ uri: 'https://devkido.com' }}
        style={{ flex: 1 }}
        startInLoadingState
        originWhitelist={['*']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
});

export default App;
