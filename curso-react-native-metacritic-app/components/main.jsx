import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { getLatestGames } from '../lib/metacritic'

export function Main() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <>
      <ScrollView>
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
      </ScrollView>
    </>
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
