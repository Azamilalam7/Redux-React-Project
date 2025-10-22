import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import { counterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(929339292938493)

  return (
    <>
    <counterContext.Provider value={count}>
        <Navbar />
    </counterContext.Provider>
    
    </>
  )
}

export default App
