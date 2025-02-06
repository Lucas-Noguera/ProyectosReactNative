import { Tabs } from 'expo-router'

import { HomeIcon, InfoIcon } from '../../components/icons.jsx'

export default function TabsLayout() {
  return <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#000000',
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
      },
    }}
  // eslint-disable-next-line react/jsx-closing-bracket-location
  >
    <Tabs.Screen
      name='index'
      options={{
        title: 'Home',
        tabBarIcon: ({color}) => <HomeIcon color={color} />,
      }} 
    />
    <Tabs.Screen
      name='about'
      options={{
        title: 'About',
        tabBarIcon: ({color}) => <InfoIcon color={color} />,       
      }} 
    />
  </Tabs>   
    
}