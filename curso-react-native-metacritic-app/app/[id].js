/* eslint-disable react-native/no-raw-text */

import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Detail({ params }) {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className='text-white font-bold mb-8 text-2x1'>
          Detalles del juego
        </Text>
        <Link href={'/'} className='text-blue-500'>
          Volver atras
        </Link>
      </View>
    </View>
  )
}