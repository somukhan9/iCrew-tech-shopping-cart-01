import { useSelector } from 'react-redux'

import Product from '../components/Product'
import Filtering from '../components/Filtering'

function ProductPage() {
  const products = useSelector((state) => state.product.filteredProducts)

  return (
    <section className="flex flex-col flex-wrap gap-3">
      <Filtering />
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {products.map((product, index) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
export default ProductPage
