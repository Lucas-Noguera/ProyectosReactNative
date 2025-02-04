/* eslint-disable react-native/no-raw-text */

import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Screen } from '../components/Screen.jsx'

export default function Detail({ params }) {

  const { id } = useLocalSearchParams()

  return (
    <Screen>
      <View>
        <Text className='text-white font-bold mb-8 text-2x1'>
          Detalles del juego {id}
        </Text>
        <Link href={'/'} className='text-blue-500'>
          Volver atras
        </Link>
      </View>
    </Screen>
  )
}