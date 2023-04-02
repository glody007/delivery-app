import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity';

export default function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
      sanityClient.fetch(
          `
              *[_type == 'featured' && _id == $id] {
                  ...,
                  restaurants[]->{
                      ...,
                      dishes[]->,
                      type->{
                        title
                      }
                  }
              }[0]

          `,
          { id }
      ).then(data => {
          setRestaurants(data?.restaurants)
      })
  }, [])

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
        {restaurants.map(restaurant => (
          <RestaurantCard 
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            genre={restaurant.type?.title}
            imgUrl={restaurant.image}
            long={restaurant.long}
            lat={restaurant.lat}
            address={restaurant.address}
          />
        ))}
      </ScrollView>
    </View>
  )
}
