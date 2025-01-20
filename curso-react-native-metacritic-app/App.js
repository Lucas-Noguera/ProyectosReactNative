import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Main } from './components/main'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 20,
  },
})
