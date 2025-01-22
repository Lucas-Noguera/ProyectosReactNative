import { useEffect, useRef } from 'react'
import { View, Text, Image, Animated } from 'react-native'

export function GameCard({ game }) {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4">
      <Image 
        source={{ uri: game.image }} 
        className="w-full h-36 rounded-lg mb-4"
      />
      <Text className="text-lg font-bold text-black text-center">
        {game.title}
      </Text>
      <Text className="text-sm text-gray-700 text-justify mt-2">
        {game.description}
      </Text>
      <Text className="text-green-600 font-bold text-center mt-2">
        Metacritic: {game.score}
      </Text>
    </View>
  )
}

export function AnimatedGameCard({ game, index }) {
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
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}
