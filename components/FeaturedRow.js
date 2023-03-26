import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4' >
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color='#00CC88' />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className='mt-4'
      >
        <RestaurantCard 
          title={'Nando\'s'}
          rating={4.8}
          genre='Sushi'
          imgUrl={'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg'}
          long
          lat
        />
        <RestaurantCard 
          title={'Nando\'s'}
          rating={4.8}
          genre='Sushi'
          imgUrl={'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg'}
          long
          lat
        />
        <RestaurantCard 
          title={'Nando\'s'}
          rating={4.8}
          genre='Sushi'
          imgUrl={'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg'}
          long
          lat
        />
      </ScrollView>
    </View>
  )
}
