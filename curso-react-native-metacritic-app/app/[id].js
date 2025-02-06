/* eslint-disable react-native/no-raw-text */

import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import {  Stack } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Screen } from '../components/Screen.jsx'
import { useEffect, useState } from 'react'
import { getGameDetails } from '../lib/metacritic.js'

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
            <Text className='text-white font-bold mb-8 text-2x1'>
              Detalles del juego {id}
            </Text>
          </ScrollView>
        )}
      </View>
    </Screen>
  )
}