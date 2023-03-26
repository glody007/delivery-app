import { TouchableOpacity, Text, Image, View } from 'react-native'

export default function CategoryCard({ name, imgUrl }) {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image 
            source={{
                uri: imgUrl
            }}
            className='h-20 w-20 rounded'
        />
        <Text className='absolute bottom-1 left-1 text-white'>{name}</Text>
    </TouchableOpacity>
  )
}