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
        <View key={game.id} style={styles.card}>
          <Image 
            source={{ uri: game.image }} 
            style={styles.image}
          />
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Text style={styles.score}>Metacritic: {game.score}</Text>
        </View>
      ))}
    
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#1c1c1e', 
    borderRadius: 10,
    marginBottom: 20,          
    padding: 15,
    width: '90%',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 20,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
    textAlign: 'justify',
  },
  gameTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    borderRadius: 10,
    height: 150,
    marginBottom: 10,
    width: '100%',
  },
  score: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
})
