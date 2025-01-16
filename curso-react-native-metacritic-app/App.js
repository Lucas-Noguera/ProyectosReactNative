import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getLatestGames } from './lib/metacritic'

export default function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map(game => (
        <View key={game.slug} style={styles.card}>
          <Image 
            source={{ uri: game.image }} 
            style={{ 
              width: 107,
              height: 147,
              borderRadius: 10
            }}
          />
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Text style={styles.gameDescription}>{game.description}</Text>
          
        </View>
      ))}
    
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
