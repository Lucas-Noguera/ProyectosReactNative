import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { getLatestGames } from '../lib/metacritic'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { GameCard } from './GameCard'
import { Logo } from './Logo'

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets()

  useEffect(() => {
    getLatestGames().then((games) => setGames(games))
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{marginTop: 20}}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ): (
        <FlatList
          data={games}
          keyExtractor={game => game.id}
          renderItem={({ item }) => <GameCard game={item} />}
        />
      )}
    </View>
  )
}