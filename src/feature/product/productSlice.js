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

    // Filter Product by Brand and Category
    filterProductByBrandAndCategory(state, action) {
      const { brand, category } = action.payload

      if (brand === '' && category === '') {
        state.filteredProducts = state.products
      } else if (brand !== '' && category === '') {
        const filteredProducts = state.products.filter(
          (product) => product.brand.toLowerCase() === brand.toLowerCase()
        )

        state.filteredProducts = filteredProducts
      } else if (brand === '' && category !== '') {
        const filteredProducts = state.products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        )

        state.filteredProducts = filteredProducts
      } else {
        const filteredProducts = state.products.filter(
          (product) =>
            product.brand.toLowerCase() === brand.toLowerCase() &&
            product.category.toLowerCase() === category.toLowerCase()
        )

        state.filteredProducts = filteredProducts
      }
    },
  },
})

export const { fetchAllProducts, filterProductByBrandAndCategory } =
  productSlice.actions

export default productSlice.reducer
