import { useSelector } from 'react-redux'

import Product from '../components/Product'
import Filtering from '../components/Filtering'

function ProductPage() {
  const products = useSelector((state) => state.product.filteredProducts)

  return (
    <section className="flex flex-col flex-wrap gap-3">
      <Filtering />
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <h2 className="text-3xl font-semibold tracking-[1.5px] my-5">
            No Product Found!
          </h2>
        )}
      </div>
    </section>
  )
}
export default ProductPage
