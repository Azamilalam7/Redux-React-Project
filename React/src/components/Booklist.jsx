import React from 'react'
import Bookcard from './Bookcard'

export const bookData = [
  { Id: 1, Book_Name: "Celeste Moon", Price: 320, Author: "Harvey Blake" },
  { Id: 2, Book_Name: "Gideon Frost", Price: 589, Author: "Lena Durham" },
  { Id: 3, Book_Name: "Aria Nolan", Price: 745, Author: "Trent Rhodes" },
  { Id: 4, Book_Name: "Silas Creek", Price: 418, Author: "Mara Lin" },
  { Id: 5, Book_Name: "Nova Quinn", Price: 676, Author: "Jude Barrett" },
  { Id: 6, Book_Name: "Calla Shore", Price: 299, Author: "Talia Mendez" },
  { Id: 7, Book_Name: "Theo Vale", Price: 808, Author: "Rosa Finch" },
  { Id: 8, Book_Name: "Wren Hollow", Price: 530, Author: "Noah Sinclair" },
  { Id: 9, Book_Name: "Juno Glass", Price: 624, Author: "Emil Hart" },
  { Id: 10, Book_Name: "Ezra Bloom", Price: 402, Author: "Isla Monroe" },
  { Id: 11, Book_Name: "Freya Pine", Price: 777, Author: "Cory Ellis" },
  { Id: 12, Book_Name: "Kieran Dusk", Price: 559, Author: "Hazel Ford" },
  { Id: 13, Book_Name: "Zara Flint", Price: 612, Author: "Leo Farrow" },
  { Id: 14, Book_Name: "Orion Snow", Price: 703, Author: "Ivy Bennett" },
  { Id: 15, Book_Name: "Luna Ray", Price: 460, Author: "Finn Carter" },
  { Id: 16, Book_Name: "Milo Starr", Price: 381, Author: "Nina Wilde" },
  { Id: 17, Book_Name: "Iris Vale", Price: 529, Author: "Owen Clay" },
  { Id: 18, Book_Name: "Soren Lake", Price: 689, Author: "Ava Cruz" },
  { Id: 19, Book_Name: "Elara Wren", Price: 345, Author: "Kai Moreno" },
  { Id: 20, Book_Name: "Rowan Kite", Price: 799, Author: "Piper Lowe" },
];

const Booklist = () => {
  return (
    <div>
      <div className='bg-[#f5f5dc] min-h-screen p-5'>
        <h1 className="text-3xl font-bold text-center text-black mb-3">Book Store</h1>
        <h2 className='text-blue-600 text-3xl p-7'>Explore The Books </h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {bookData.map( (book) => {
                return <Bookcard key={book.Id} book={book}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Booklist
