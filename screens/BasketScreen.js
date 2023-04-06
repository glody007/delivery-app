import { 
    View, 
    Text, 
    SafeAreaView,
    TouchableOpacity, 
    ScrollView,
    Image
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useMemo, useState } from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import BasketRow from '../components/BasketRow'
import { formatCurrency } from 'react-native-format-currency'

export default function BasketScreen() {
  const selectedRestaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

  const fees = 4.9

  const [basketTotalWithSymbol] = formatCurrency({ amount: basketTotal, code: "USD" });

  const [feesWithSymbol] = formatCurrency({ amount: fees, code: "USD" });

  const [totalWithSymbol] = formatCurrency({ amount: fees+basketTotal, code: "USD" });

  const navigation = useNavigation()

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
            if(!results[item.id]) results[item.id] = [item]
            else results[item.id].push(item)
            return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            {/* Header */}
            <View className="bg-white p-4 border-b border-[#01A196]">
                <View className="">
                    <Text className="text-2xl text-center font-bold">Basket</Text>
                    <Text className="text-xs text-gray-500 text-center font-bold">{selectedRestaurant.title}</Text>
                </View>

                <TouchableOpacity 
                    className="absolute bottom-4 right-4"
                    onPress={() => navigation.goBack()}
                >
                    <XCircleIcon size={40} color={'#01A196'} />
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center bg-white space-x-2 py-2 px-4 my-4">
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h-12 w-12 bg-gray-100 border border-gray-200 rounded-full"
                />
                <Text className="flex-1">Delivery in 50 - 70 min</Text>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Text className="text-[#01A196]">Change</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-1 justify-between">
                <ScrollView className="divide-y divide-gray-300">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <BasketRow 
                            key={key}  
                            id={key}
                            price={items[0]?.price}
                            quantity={items.length}
                            imgUrl={items[0]?.imgUrl}
                            name={items[0]?.name}
                        />
                    ))}
                </ScrollView>

                <View className="p-4 bg-white">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-500">Subtotal</Text>
                        <Text className="text-gray-500">{basketTotalWithSymbol}</Text>
                    </View>
                    <View className="flex-row justify-between mt-4">
                        <Text className="text-gray-500">Delivery fees</Text>
                        <Text className="text-gray-500">{feesWithSymbol}</Text>
                    </View>
                    <View className="flex-row justify-between mt-4">
                        <Text>Order total</Text>
                        <Text className="font-extrabold text-lg">{totalWithSymbol}</Text>
                    </View>
                    <TouchableOpacity 
                        className="flex-row bg-[#00CCBB] rounded-lg p-4 mt-4"
                        onPress={() => navigation.navigate('PlaceOrder')}
                    >
                        <View className="flex-1">
                            <Text className="text-xl text-white text-center font-extrabold">Place order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}