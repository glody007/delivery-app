import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `
                *[_type == 'category'] {
                    ...
                }
  
            `
        ).then(data => {
            setCategories(data)
        })
    }, [])

    return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {categories.map(category => (
            <CategoryCard 
                key={category._id}
                id={category._id}
                imgUrl={category.image} 
                name={category.title}
            />
        ))}
    </ScrollView>
  )
}