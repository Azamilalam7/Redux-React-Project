import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { counterContext } from '../context/Context'

const Component1 = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Component1
