import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: { 
    title: null, 
    rating: null, 
    genre: null, 
    imgUrl: null, 
    long: null, 
    lat: null, 
    short_description: null, 
    dishes: null,
    address: null
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer