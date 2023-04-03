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

export default function DishRow({ 
    id, 
    name, 
    imgUrl, 
    short_description,
    price
}) {

  const [valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: price, code: "USD" });
  const [isPressed, setIsPressed] = useState(false)

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
                    borderColor: "F3F3F4"
                }}
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className="w-20 h-20 bg-gray-300 p-4"
            />
        </TouchableOpacity>

        {isPressed && (
            <View className="flex-row items-center space-x-2 px-4 pb-3">
                <TouchableOpacity onPress={() => {
                        
                    }}
                >
                    <MinusCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity> 
                <Text className="font-bold">0</Text>
                <TouchableOpacity onPress={() => {
                        
                    }}
                >
                    <PlusCircleIcon size={40} color='#00CCBB' />
                </TouchableOpacity> 
            </View>
        )}
    </>
  )
}
