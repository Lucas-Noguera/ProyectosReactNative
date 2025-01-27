import { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'

export function GameCard({ game }) {
  return (
    <View className="flex-row bg-slate-500 p-2 rounded-xl gap-4 mb-5">
      <Image 
        source={{ uri: game.image }} 
        style={styles.image}
      />
      <View className="w-60">
        <Text className="mb-1" style={styles.title}>{game.title}</Text>
        <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0, 100)}...</Text>
        <Text style={styles.score}>Metacritic: {game.score}</Text>
      </View>
    </View>
  )
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 250,
      useNativeDriver: true, 
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
    marginBottom: 16,
  },
  description: {
    color: '#eee',
    flexWrap: 'wrap',
    fontSize: 16,
  },
  image: {
    borderRadius: 30,
    height: 200,
    resizeMode: 'cover',
    width: 150,
  },
  score: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
})