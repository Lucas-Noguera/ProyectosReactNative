import { ActivityIndicator, ScrollView, Text, View, Image } from 'react-native'
import { Stack } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Screen } from '../components/Screen.jsx'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../lib/metacritic.js'
import { Score } from '../components/Score.jsx'

export default function Detail({ params }) {

  const { id } = useLocalSearchParams()
  const [gameInfo, setGameInfo] = useState(null)

  useEffect(() => {
    if(id){
      getGameDetails(id).then(setGameInfo)
    }
  }, [id])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#ffee00' },
          headerTintColor: 'black',
          headerTitle: 'The Legend of Zelda: Breath of the Wild',
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={'#fff'} size={'large'} />
        ) : (
          <ScrollView>
            <View className='justify-center items-center text-center'>
              <Image
                className='mb-4 rounded'
                source={{ uri: gameInfo.image }}
                style={{
                  width: 214, 
                  height: 294, 
                }}
                resizeMode='stretch'
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className='text-white font-bold  text-2x1 text-xl text-center'>
                {gameInfo.title}
              </Text>
              <Text className='text-white/70 mt-4 text-left mb-8 text-base'>
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  )
}
