import { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'

export function GameCard({ game }) {
  return (
    <View className="bg-white rounded-lg shadow-md" key={game.id}>
      <Image 
        source={{ uri: game.image }} 
        style={styles.image}
      />
      <Text style={styles.gameTitle}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>Metacritic: {game.score}</Text>
    </View>
  )
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: false,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={[styles.card, {opacity}]}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#1c1c1e', 
    borderRadius: 10,
    marginBottom: 20,          
    padding: 15,
    width: '100%',
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
