import React from 'react'
import { useParams } from 'react-router-dom'
// import Booklist from '../components/Booklist'
import Bookcard from '../components/Bookcard'
import { bookData } from '../components/Booklist'

const Product = () => {
 
  
  const {id} = useParams()
  console.log(id);
  
  
    
  return (
    <div>

    <div className="p-6 text-center text-xl">
        <h1 className="font-bold text-2xl mb-4">Book Id {id }</h1>
        {/* <p>This is a detailed page for product with ID: <strong>{id}</strong></p> */}
     {/* <Bookcard key={id}/> */}
       
    </div>
      
    </div>
  )
}

export default Product
