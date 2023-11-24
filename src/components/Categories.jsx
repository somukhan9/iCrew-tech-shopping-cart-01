import products from '../utils/products'

let categories = products.map((product) => product.category)
categories = new Set(categories)
categories = Array.from(categories)

function Categories({ setCategory }) {
  const handleCategoryFiltering = (event) => {
    const category = event.target.value
    // console.log(category)
    setCategory(category)
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h4 className="text-md font-medium tracking-[1.5px] text-center">
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
