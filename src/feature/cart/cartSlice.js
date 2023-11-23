import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
}

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    // Add Item to the Cart
    addToCart(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload.id)

      if (item) {
        // item = {...item, amount: 1}
        item.amount += 1
      } else {
        action.payload = { ...action.payload, amount: 1 }
        state.cartItems.push(action.payload)
      }

      state.numItemsInCart += 1
      localStorage.setItem('cart', JSON.stringify(state))
    },

    // Remove Item from the Cart
    removeFromCart(state, action) {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      )

      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      state.cartItems = filteredItems
      state.numItemsInCart -= foundItem.amount
      localStorage.setItem('cart', JSON.stringify(state))
    },

    // Increase by 1
    increase(state, action) {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      foundItem.amount += 1
      state.numItemsInCart += 1
      localStorage.setItem('cart', JSON.stringify(state))
    },

    // Decrease by 1
    decrease(state, action) {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      foundItem.amount -= 1
      state.numItemsInCart -= 1
      localStorage.setItem('cart', JSON.stringify(state))
    },

    // Calculate total price
    calculateTotal(state) {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.numItemsInCart = amount
      state.cartTotal = total
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addToCart, removeFromCart, increase, decrease, calculateTotal } =
  cartSlice.actions

export default cartSlice.reducer
