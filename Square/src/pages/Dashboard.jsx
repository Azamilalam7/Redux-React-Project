import React, { useContext } from 'react'
import { InputContext } from '../context/Input'

const Dashboard = () => {

  const [input ,setInput] =useContext(InputContext)
  return (
    <div className='text-[4vw]'>
      <div className='mt-9 ml-10 text-4xl flex gap-6'>
        <div className='h-[16vh] w-[22vw] border border-blue-500  rounded-4xl px-4 py-5'>
          Value ----- 1 <span className='bg-black text-white rounded-md text-3xl px-2'>{input}</span>
        </div>
        <div className='h-[16vh] w-[22vw] border border-blue-500  rounded-4xl px-4 py-5'>
          Value ----- 1 <span className='bg-black text-white rounded-md text-3xl px-2'>{input}</span>
        </div>
        <div className='h-[16vh] w-[22vw] border border-blue-500  rounded-4xl px-4 py-5'>
          Value ----- 1 <span className='bg-black text-white rounded-md text-3xl px-2'>{input}</span>
        </div>
        <div className='h-[16vh] w-[22vw] border border-blue-500  rounded-4xl px-4 py-5'>
          Value ----- 1 <span className='bg-black text-white rounded-md text-3xl px-2'>{input}</span>
        </div>
      </div>
    </div>
  )
}


export default  Dashboard