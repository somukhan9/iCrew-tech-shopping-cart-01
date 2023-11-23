import * as React from 'react'
import { useDispatch } from 'react-redux'

import Category from './Categories'
import products from '../utils/products'
import { filterProductByBrand } from '../feature/product/productSlice'

let brands = products.map((product) => product.brand)
brands = new Set(brands)
brands = Array.from(brands)

function Brands() {
  const [brand, setBrand] = React.useState('')
  const dispatch = useDispatch()

  const handleBrandFiltering = (event) => {
    event.preventDefault()
    console.log(brand)
    dispatch(filterProductByBrand(brand))
    setBrand('')
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h4 className="text-md font-medium text-center tracking-[1.5px]">
        Brands
      </h4>
      <div className="flex gap-2 justify-center items-center">
        {brands.map((brand, index) => (
          <p key={index} value={brand}>
            {brand}
          </p>
        ))}
      </div>

      <form
        onSubmit={handleBrandFiltering}
        className="flex flex-row gap-4 items-center"
      >
        <input
          id="brand"
          className="p-2 bg-white rounded-xl my-2 outline-none"
          type="text"
          placeholder="Enter brand name here..."
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <button
          className="bg-orange-500 uppercase font-semibold text-white h-[40px] px-5 rounded-lg tracking-[2px] text-sm"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}
export default Brands
