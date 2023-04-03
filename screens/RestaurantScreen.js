import React, { useLayoutEffect } from 'react'
import { 
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { 
    ArrowLeftIcon, 
    StarIcon,
    MapPinIcon, 
    ChevronRightIcon
} from 'react-native-heroicons/solid'
import { ClockIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

export default function RestaurantScreen() {
    const navigation = useNavigation()
    
    const {
        params: { 
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
    } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image 
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className="w-full h-60"
                    />
                    <TouchableOpacity 
                        className="absolute left-5 top-10 p-2 bg-gray-100 rounded-full"
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <ArrowLeftIcon size={20} color='#00CC88' />
                    </TouchableOpacity>
                </View>

                <View>
                    
                </View>

                <View className="bg-white px-4 py-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row items-center space-x-4 mt-2">
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={20} />
                            <Text className='text-xs text-green-500'>{rating}</Text>
                            <Text className='text-xs text-gray-500'>- {genre}</Text>
                        </View>
                        <View className='flex-row items-center space-x-1 mt-1'>
                            <MapPinIcon color='gray' opacity={0.4} size={20} />
                            <Text className='text-xs text-gray-500'>Nearby - {address}</Text>
                        </View>
                    </View>
                    <View className="border-b-2 border-b-gray-100 pb-4">
                        <Text className="text-gray-500 mt-2">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row justify-between items-center mt-4">
                        <View className="flex-row items-center space-x-2">
                            <ClockIcon size={20} color="gray" opacity={0.4} />
                            <Text className="text-md font-bold">Have a food allergy?</Text>
                        </View>
                        <ChevronRightIcon color='green' opacity={0.5} />
                    </TouchableOpacity>
                </View>

                <View className="mx-4 mt-4">
                    <Text className="text-xl font-bold">Menu</Text>
                </View>

                <View className="bg-white mt-4 pb-36">
                    {dishes.map((dish) => (
                        <DishRow 
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            short_description={dish.short_description}
                            imgUrl={dish.image}
                            price={dish.price}
                        />
                    ))}
                </View>

            </ScrollView>
        </>
    )
}
