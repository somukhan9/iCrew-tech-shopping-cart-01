import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    // Fetch all the products
    fetchAllProducts(state, action) {
      state.products = action.payload
      state.filteredProducts = state.products
    },

    // Filter product by the category
    filterProductByCategory(state, action) {
      if (action.payload === '') {
        state.filteredProducts = state.products
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        )
      }
    },

    // Filter product by the brand
    filterProductByBrand(state, action) {
      if (action.payload === '') {
        state.filteredProducts = state.products
      } else {
        state.filteredProducts = state.products.filter(
          (product) =>
            product.brand.toLowerCase() === action.payload.toLowerCase()
        )
      }
    },
  },
})

export const {
  fetchAllProducts,
  filterProductByCategory,
  filterProductByBrand,
} = productSlice.actions

export default productSlice.reducer
