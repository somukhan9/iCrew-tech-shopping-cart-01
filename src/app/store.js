import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../feature/product/productSlice'
import cartReducer from '../feature/cart/cartSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

export default store
