import { useNavigation } from '@react-navigation/native';
import { 
    useLayoutEffect, 
    useState, 
    useEffect 
} from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { 
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

export default function Home() {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `
                *[_type == 'featured'] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes->
                    }
                }

            `
        ).then(data => {
            setFeaturedCategories(data)
        })
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className='bg-white'>

            {/* Header */}
            <View className='flex-row items-center pb-4 space-x-2 mx-4'>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-xs text-gray-300'>Deliver now</Text>
                    <Text className='font-bold text-xl'>
                        Current location
                        <ChevronDownIcon size={20} color='#00CC88' />
                    </Text>
                </View>

                <UserIcon size={33} color='#00CC88' />
            </View>

            {/* Search */}
            <View className='flex-row items-center pb-4 space-x-2 mx-4'>
                <View className='flex-row flex-1 bg-gray-200 space-x-2 p-3'>
                    <MagnifyingGlassIcon size={20} color='gray' />
                    <TextInput placeholder='Restaurant and hotel' />
                </View>

                <AdjustmentsVerticalIcon size={33} color='#00CC88' />
            </View>

            {/* Body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured rows */}
                {featuredCategories?.map(category => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}