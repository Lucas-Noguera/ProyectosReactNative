/* eslint-disable react-native/no-raw-text */
import { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { View, ActivityIndicator, FlatList, Pressable } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { AnimatedGameCard } from './GameCard'
import { Logo } from './Logo'
import { CircleInfoIcon } from './icons'

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return  (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginTop: 20 }}>
        <Logo />
      </View>
      <Link asChild href='/about'>
        <Pressable>
          <CircleInfoIcon />
        </Pressable> 
      </Link>      
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }} 
        />
      )}
    </View>
  )
  
}