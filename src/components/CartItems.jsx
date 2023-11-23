import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { currencyFormatter } from '../utils/currencyFormat'
import { removeFromCart, increase, decrease } from '../feature/cart/cartSlice'

function CartItems({ item }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const handleRemoveItemFromCart = () => {
    dispatch(removeFromCart(item.id))
  }

  const handleIncrease = () => {
    dispatch(increase(item.id))
  }

  const handleDecrease = () => {
    if (item.amount === 1) {
      handleRemoveItemFromCart()
      return
    }
    dispatch(decrease(item.id))
  }

  return (
    <article className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <img
          src={item.image_url}
          alt={item.name}
          className="h-[50px] w-[50px] object-cover"
        />
        <div>
          <h3 className="text-lg tracking-[1.5px]">{item.name}</h3>
          <p className="font-semibold tracking-[1.5px]">
            {currencyFormatter(item.price)}
          </p>
          <button
            onClick={handleRemoveItemFromCart}
            className="text-blue-500 tracking-[2px] font-semibold"
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handleIncrease}
          className="text-lg text-blue-500 font-bold"
        >
          ^
        </button>
        <p>{item.amount}</p>
        <button
          onClick={handleDecrease}
          className="text-lg text-blue-500 font-bold rotate-[180deg]"
        >
          ^
        </button>
      </div>
    </article>
  )
}
export default CartItems
