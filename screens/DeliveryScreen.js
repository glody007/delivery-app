import { 
    View, 
    Text,
    SafeAreaView, 
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import MapView, { Marker }  from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';

export default function DeliveryScreen() {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View className="flex-1 bg-[#00CCBB]">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between mx-4">
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <XMarkIcon size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-white">Order Help</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-between rounded bg-white p-6 mx-4 mt-4 shadow-md">
                <View>
                    <Text className="text-lg text-gray-500">Estimated Arrival</Text>
                    <Text className="text-3xl font-extrabold">45-55 Minutes</Text>
                    <Progress.Bar 
                        indeterminate={true}
                        width={160} 
                        color={'#00CCBB'}
                        className="my-2"
                    />
                    <Text className="text-gray-500">Your order at {restaurant.title} is being prepared</Text>
                </View>
                <Image 
                    source={require('../assets/delivery.png')}
                    className="w-20 h-24"
                />
            </View>
        </SafeAreaView>

        <View className="flex-1 -mt-10 z-0">
            <MapView 
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className="z-0" 
                style={{
                    width: '100%',
                    height: '100%'
                }}
                mapType='mutedStandard'
            >  
                <Marker 
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>
        </View>
            

        <SafeAreaView className="bg-white">
            <View className="flex-row items-center p-4 space-x-4">
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-12 w-12 rounded-full bg-gray-300"
                />
                <View className="flex-1">
                    <Text>Glody mbutwile</Text>
                    <Text className="text-xs text-gray-500">Your rider</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB] font-bold">Call</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    </View>
  )
}