import { useDispatch } from 'react-redux'

import products from '../utils/products'
import { filterProductByCategory } from '../feature/product/productSlice'

let categories = products.map((product) => product.category)
categories = new Set(categories)
categories = Array.from(categories)

function Categories() {
  const dispatch = useDispatch()

  const handleCategoryFiltering = (event) => {
    const category = event.target.value
    console.log(category)
    dispatch(filterProductByCategory(category))
  }

  return (
    <div>
      <h4 className="text-md font-medium mb-3 tracking-[1.5px] text-center">
        Categories
      </h4>
      <select
        name="category"
        id="category"
        className="outline-none p-3 rounded-xl"
        onChange={handleCategoryFiltering}
      >
        <option value={''}>All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Categories
