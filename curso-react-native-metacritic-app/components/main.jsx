/* eslint-disable react-native/no-raw-text */
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import { AnimatedGameCard } from './GameCard'
import { Screen } from './Screen'
export function Main() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return  (
    <Screen>
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
    </Screen>
  )
  
}