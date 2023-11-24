import * as React from 'react'

import products from '../utils/products'

let brands = products.map((product) => product.brand)
brands = new Set(brands)
brands = Array.from(brands)

function Brands({ setBrand }) {
  const handleBrandFiltering = (event) => {
    const brand = event.target.value
    // console.log(brand)
    setBrand(brand)
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h4 className="text-md font-medium text-center tracking-[1.5px]">
        Brands
      </h4>
      <select
        name="brand"
        id="brand"
        className="outline-none p-3 rounded-xl"
        onChange={handleBrandFiltering}
      >
        <option value={''}>All</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Brands
