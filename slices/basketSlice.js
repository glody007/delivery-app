import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addTobasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      
      let newBasket = [...state.items]

      if(index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Item (id: ${action.payload.id}) is not in basket`)
      }

      state.items = newBasket
    },
    removeAllOccurrencesFromBasket: (state, action) => {
        let index = 0
        let newBasket = [...state.items]

        do {
            index = newBasket.findIndex((item) => item.id === action.payload.id)
    
            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                state.items = newBasket
            }
        } while(index >= 0)
  
      },
  },
})

// Action creators are generated for each case reducer function
export const { addTobasket, removeFromBasket, removeAllOccurrencesFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithid = (state, id) => 
    state.basket.items.filter((item) => item.id === id)

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => 
    total += item.price, 0)

export default basketSlice.reducer