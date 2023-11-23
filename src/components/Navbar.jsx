import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Navbar() {
  const cart = useSelector((state) => state.cart)

  return (
    <header className="p-5 bg-orange-700">
      <nav className="flex flex-row items-center justify-between text-white max-w-[1168px] w-[100%] mx-auto">
        <h4 className="font-semibold tracking-[1.5px] text-2xl">
          <Link to="/">Shopping Cart</Link>
        </h4>
        <button className="tracking-[1.5px] relative">
          <Link to="/cart">
            Cart
            <span className="w-[20px] h-[20px] rounded-full bg-white text-black absolute bottom-[15px] right-[0%] flex items-center justify-center">
              {cart.numItemsInCart}
            </span>
          </Link>
        </button>
      </nav>
    </header>
  )
}
export default Navbar
