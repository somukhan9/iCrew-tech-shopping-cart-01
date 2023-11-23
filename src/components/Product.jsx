import { useDispatch } from 'react-redux'

import { addToCart } from '../feature/cart/cartSlice'
import { currencyFormatter } from '../utils/currencyFormat'

function Product({ product }) {
  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(addToCart(product))
  }

  return (
    <article className="w-[300px] bg-white shadow-md flex flex-col items-center justify-center px-4 py-5 rounded-2xl">
      <img
        src={product.image_url}
        alt={product.name}
        className="h-[150px] w-[150px] object-cover"
      />
      <h3 className="text-2xl font-semibold tracking-[1.2px] mb-5">
        {product.name}
      </h3>
      <div className="flex flex-row items-center justify-between w-[90%] mb-5">
        <p className="text-md font-medium tracking-[1.5px]">
          {product.category}
        </p>
        <p className="text-md font-medium tracking-[1.5px]">{product.brand}</p>
        <p className="text-md font-medium tracking-[1.5px]">{product.rating}</p>
      </div>
      <div className="flex flex-col gap-2 items-center w-[90%]">
        <p className="text-md font-semibold tracking-[1.5px]">
          Price:
          <span className="font-bold">{currencyFormatter(product.price)}</span>
        </p>
        <button
          onClick={addItem}
          className="uppercase w-full text-xs font-semibold bg-orange-500 text-white py-3 px-5 rounded-lg tracking-[1.5px]"
        >
          add to cart
        </button>
      </div>
    </article>
  )
}
export default Product
