import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-black text-white p-4 flex justify-center gap-15 ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
    </nav>
    </div>
  )
}

export default Navbar
