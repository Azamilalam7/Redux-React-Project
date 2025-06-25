import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../Context/Bookcontext'


const Bookcard = ({book}) => {

  const {addToCart} = useCart()
  const {navigate} = useNavigate()

  const handleAddToCart  = () => {
    addToCart(book)
    navigate('/cart')
  }


  return (
    <div>  
        <div class="h-[16em] w-[18em] border-4 border-[rgba(47,29,71,0.7)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
          <div>
              <h1 className="text-[2em] font-medium">{book.Book_Name}</h1>
              <p className="text-[0.85em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni.</p>
              <p className="text-[16px]">Author: {book.Author}</p>
              <p className="text-[16px]">Price: ₹{book.Price}</p>
          </div>

     <button
          onClick={handleAddToCart}
          className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
        >
          Add To Cart
     </button>
  
        </div>

    </div>
  )
}

export default Bookcard
