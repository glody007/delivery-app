import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({ id, title, rating, genre, imgUrl, long, lat, short_description, dishes, address }) {
  const navigation = useNavigation()
    
  return (
    <TouchableOpacity 
        className='bg-white rounded mr-2 shadow'
        onPress={() => {
            navigation.navigate(
                'Restaurant', 
                { 
                    id,
                    title, 
                    rating, 
                    genre, 
                    imgUrl, 
                    long, 
                    lat,
                    short_description, 
                    dishes,
                    address
                }
            )
        }}
    >
        <Image 
            source={{
                uri: urlFor(imgUrl).url()
            }}
            className='w-64 h-36 rounded-t'
        />

        <View className='p-2'>
            <Text className='text-lg font-bold'>{title}</Text>

            <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={20} />
                <Text className='text-xs text-green-500'>{rating}</Text>
                <Text className='text-xs text-gray-500'>- {genre}</Text>
            </View>

            <View className='flex-row items-center space-x-1 mt-1'>
                <MapPinIcon color='gray' opacity={0.4} size={20} />
                <Text className='text-xs text-gray-500'>{address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}
