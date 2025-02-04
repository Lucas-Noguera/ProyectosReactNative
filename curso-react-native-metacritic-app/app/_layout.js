import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import { Logo } from '../components/Logo'
import { CircleInfoIcon } from '../components/icons'
import { useRouter } from 'expo-router'
import { RectButton } from 'react-native-gesture-handler'

export default function Layout() {
  const router = useRouter()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'yellow',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <RectButton onPress={() => router.push('/about')} style={{ padding: 10 }}>
              <CircleInfoIcon />
            </RectButton>
          ),
        }}
      />
    </GestureHandlerRootView>
  )
}
