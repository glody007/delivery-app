import React from 'react'
import { 
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { formatCurrency } from 'react-native-format-currency'
import { useNavigation } from '@react-navigation/native'

export default function BasketIcon() {
  const totalBasket = useSelector(selectBasketTotal)
  const items = useSelector(selectBasketItems)
  const [valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: totalBasket, code: "USD" });

  const navigation = useNavigation()

  if(items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-10">
        <TouchableOpacity 
            className="flex-row bg-[#00CCBB] rounded-lg mx-4 p-4"
            onPress={() => navigation.navigate('Basket')}
        >
            <View className="flex-1 flex-row justify-between items-center">
                <View className="bg-[#01A196] rounded p-2">
                    <Text className="text-xl text-white font-extrabold">{items.length}</Text>
                </View>
                <View>
                    <Text className="text-xl text-white font-extrabold">View Basket</Text>
                </View>
                <View>
                    <Text className="text-xl text-white font-extrabold">{valueFormattedWithoutSymbol}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}