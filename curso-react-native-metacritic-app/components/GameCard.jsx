import { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native'
import { Score } from './Score'

export function GameCard({ game }) {
  return (
    <View className="flex-row bg-slate-500 p-2 rounded-xl gap-1 mb-4">
      <Image 
        source={{ uri: game.image }} 
        style={styles.image}
      />
      <View className="justify-center items-left">
        <Text className="mb-1" style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0, 50)}...</Text>
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
    width: 200
  },
  image: {
    borderRadius: 30,
    height: 180,
    margin: 0,
    padding: 0,
    resizeMode: 'stretch',
    width: 165,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    width: 200

  },
})