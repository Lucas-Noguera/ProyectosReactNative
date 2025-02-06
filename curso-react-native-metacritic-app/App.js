import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Main } from './components/main'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    resizeMode: 'stretch',
  },
})