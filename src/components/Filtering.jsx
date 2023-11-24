import * as React from 'react'
import { useDispatch } from 'react-redux'

import Brands from './Brands'
import Categories from './Categories'

import { filterProductByBrandAndCategory } from '../feature/product/productSlice'

function Filtering() {
  const dispatch = useDispatch()
  const [brand, setBrand] = React.useState('')
  const [category, setCategory] = React.useState('')

  // const handleFilterProductsByBrandAndCategory = () => {
  //   console.log(brand, category)
  //   dispatch(filterProductByBrandAndCategory({ brand, category }))
  // }

  React.useEffect(() => {
    dispatch(filterProductByBrandAndCategory({ brand, category }))
  }, [brand, category])

  return (
    <section className="flex flex-row items-center justify-center gap-5">
      <Brands setBrand={setBrand} />
      <Categories setCategory={setCategory} />
    </section>
  )
}
export default Filtering
