import React, { useState } from 'react'
import { 
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'
import { 
    MinusCircleIcon,
    PlusCircleIcon
} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { formatCurrency } from 'react-native-format-currency'
import { useDispatch, useSelector } from 'react-redux'
import { 
    addTobasket, 
    removeFromBasket, 
    selectBasketItems,
    selectBasketItemsWithid
} from '../slices/basketSlice'

export default function DishRow({ 
    id, 
    name, 
    imgUrl, 
    short_description,
    price
}) {

  
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector(state => selectBasketItemsWithid(state, id))
  const dispatch = useDispatch()

  const [valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: price, code: "USD" });
  const addItemToBasket = () => {
    dispatch(addTobasket({id, name, imgUrl, short_description, price}))
  }
  const removeItemFromBasket = () => {
    if(items.length <= 0) return
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
        <TouchableOpacity 
            onPress={() => {
                setIsPressed((prevState) => !prevState)
            }}
            className={`flex-row border border-gray-200 p-4 space-x-2 ${
                isPressed && 'border-b-0'
            }`}
        >
            <View className="flex-1">
                <Text className="text-lg">{name}</Text>
                <Text className="text-sm text-gray-500 mt-1">{short_description}</Text>
                <Text className="text-gray-500 mt-2">{valueFormattedWithoutSymbol}</Text>
            </View>
            <Image 
                style={{
                    borderWidth: 1,
                    borderColor: "#F3F3F4"
                }}
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className="w-20 h-20 bg-gray-300 p-4"
            />
        </TouchableOpacity>

        {isPressed && (
            <View className="flex-row items-center space-x-2 px-4 pb-3">
                <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                    <MinusCircleIcon size={40} color={items.length > 0 ? '#00CCBB' : 'gray'} />
                </TouchableOpacity> 
                <Text className="font-bold">{items.length}</Text>
                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity> 
            </View>
        )}
    </>
  )
}
