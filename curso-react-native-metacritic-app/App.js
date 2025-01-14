import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{uri: 'https://i.pinimg.com/originals/b5/e9/2a/b5e92a9f9f2e9634b2e816b9594d42f5.jpg'}}
        style={{width: 215, height: 294}}
      />
      <Text style={{fontSize: 20, color: 'white'}}>Metacritic</Text>
      <Button 
        title='Pulsa aqui'
        onPress={() => alert('Hola')}
      />
      <TouchableHighlight />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
  },
})
