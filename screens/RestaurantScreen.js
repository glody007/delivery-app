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
    ChevronRightIcon,
    MinusIcon,
    PlusIcon
} from 'react-native-heroicons/solid'
import { ClockIcon } from 'react-native-heroicons/outline'

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
        <ScrollView className="relative flex-1">
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
                        <Text className='text-xl text-green-500'>{rating}</Text>
                        <Text className='text-xl text-gray-500'>- {genre}</Text>
                    </View>
                    <View className='flex-row items-center space-x-1 mt-1'>
                        <MapPinIcon color='gray' opacity={0.4} size={20} />
                        <Text className='text-xl text-gray-500'>{address}</Text>
                    </View>
                </View>
                <View className="border-b-2 border-b-gray-100 pb-4">
                    <Text className="text-sm text-gray-500 mt-2">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row justify-between items-center mt-4">
                    <View className="flex-row items-center space-x-2">
                        <ClockIcon size={20} color="gray" opacity={0.4} />
                        <Text className="text-xl font-bold">Have a food allergy?</Text>
                    </View>
                    <ChevronRightIcon color='green' opacity={0.5} />
                </TouchableOpacity>
            </View>

            <View className="mx-4 mt-4">
                <Text className="text-2xl font-bold">Menu</Text>
            </View>

            <View className="bg-white p-4 mt-4">
                {dishes.map((dish) => (
                    <View>
                        <View className="flex-row space-x-2">
                            <View className="flex-1">
                                <Text className="text-2xl">{dish.name}</Text>
                                <Text className="text-sm text-gray-500 mt-2">{dish.short_description}</Text>
                            </View>
                            <Image 
                                source={{
                                    uri: urlFor(imgUrl).url()
                                }}
                                className="w-20 h-20"
                            />
                        </View>
                        <View className="flex-row items-center space-x-2">
                            <TouchableOpacity 
                                className="p-2 bg-green-500 rounded-full"
                                onPress={() => {
                                    
                                }}
                            >
                                <MinusIcon size={20} color='white' />
                            </TouchableOpacity> 
                            <Text className="font-bold">12</Text>
                            <TouchableOpacity 
                                className="p-2 bg-green-500 rounded-full"
                                onPress={() => {
                                    
                                }}
                            >
                                <PlusIcon size={20} color='white' />
                            </TouchableOpacity> 
                        </View>
                    </View>
                ))}
            </View>

        </ScrollView>
    )
}
