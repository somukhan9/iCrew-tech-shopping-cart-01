import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../components/CartItems'
import { currencyFormatter } from '../utils/currencyFormat'

import { calculateTotal } from '../feature/cart/cartSlice'

function CartPage() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(calculateTotal())
  }, [cart.cartItems])

  if (cart.cartItems.length === 0) {
    return (
      <h2 className="text-3xl tracking-[1.5px] text-center">
        Your cart is empty!
      </h2>
    )
  }

  return (
    <section className="flex flex-col gap-4  max-w-[768px] w-[100%] mx-auto">
      <h1 className="text-center text-3xl">Cart</h1>
      {cart.cartItems.map((item) => (
        <CartItems key={item.id} item={item} />
      ))}
      <div className="h-[5px] w-[100%] bg-blue-800"></div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-[18px] tracking-[1.5px] font-semibold">Total</h3>
        <h3 className="font-semibold tracking-[1.5px]">
          {currencyFormatter(cart.cartTotal)}
        </h3>
      </div>
    </section>
  )
}
export default CartPage
