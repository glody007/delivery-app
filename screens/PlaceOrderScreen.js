import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function PlaceOrderScreen() {
  const navigation = useNavigation()

  setTimeout(() => {
    navigation.navigate('Delivery')
  }, 5000)

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
        <Animatable.Image 
            source={require('../assets/delivery.png')}
            className="h-96 w-80"
        />
        <Animatable.Text
            className="text-lg font-bold text-center text-white my-10"
        >
            Waiting for restaurant to accept your order!
        </Animatable.Text>
        <Progress.Circle
            size={60} 
            indeterminate={true} 
            color="white" 
        />
    </SafeAreaView>
  )
}