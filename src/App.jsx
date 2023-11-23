import * as React from 'react'
import { useDispatch } from 'react-redux'

import ReactRouterDom from './components/ReactRouterDom'
import Navbar from './components/Navbar'
import Filtering from './components/Filtering'
import { fetchAllProducts } from './feature/product/productSlice'
import products from './utils/products'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllProducts(products))
  }, [])
  return (
    <>
      <Navbar />
      <main className="p-5">
        {/* <Filtering /> */}
        <ReactRouterDom />
      </main>
    </>
  )
}

export default App
