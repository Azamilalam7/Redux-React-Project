import React from 'react'
import { useCart } from '../Context/Bookcontext'

const Cart = () => {
  const { Cart } = useCart();

  return (
    <div className="p-6 text-black bg-[#f5f5dc] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      {Cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Cart.map((book, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{book.Book_Name}</h2>
            <p>Author: {book.Author}</p>
            <p>Price: ₹{book.Price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart;
