import { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Image, Animated, Pressable } from 'react-native'
import { Score } from './Score'
import { Link } from 'expo-router'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable)

export function GameCard({ game }) {
  return (
    <Link href={`/${game.id}`} asChild>
      <StyledPressable className='active:opacity-70 border border-black active:border-white/50 mb-2 bg-slate-500 p-2 rounded-xl'>
        <View className="flex-row gap-4 mb-1" key={game.id}>
          <Image 
            source={{ uri: game.image }} 
            style={styles.image}
          />
          <View className="flez-shrink">
            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0, 100)}...</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
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
    height: 190,
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