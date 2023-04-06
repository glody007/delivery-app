import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { useDispatch } from 'react-redux'
import { removeAllOccurrencesFromBasket } from '../slices/basketSlice'
import { formatCurrency } from 'react-native-format-currency'

export default function BasketRow({ id, quantity, imgUrl, name, price }) {
  const dispatch = useDispatch()

  const [totalWithSymbol] = formatCurrency({ amount: price * quantity, code: "USD" });

  return (
    <View className="flex-row justify-between items-center bg-white space-x-2 py-2 px-4">
      <Text className="text-[#01A196]">{quantity} x</Text>
      <Image 
        source={{
           uri: urlFor(imgUrl).url()
        }}
        className="h-14 w-14 bg-gray-200 border border-gray-400 rounded-full"
      />
      <Text className="flex-1">{name}</Text>
      <Text className="">{totalWithSymbol}</Text>
      <TouchableOpacity onPress={() => {
        dispatch(removeAllOccurrencesFromBasket({id}))
      }}>
        <Text className="text-[#01A196]">Remove</Text>
      </TouchableOpacity>
    </View>
  )
}