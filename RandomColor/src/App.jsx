import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('light')

  const changeColor = () => {
    let character = "0123456789ABCDEF"
    let colour = "#"
    for (let i = 0 ; i < 6 ; i++){
      colour += character[Math.floor(Math.random() * 16)]
    }
    console.log(colour)
    setColor(colour)
  }

  return (
    <>
    <div style={{ backgroundColor: color, minHeight: '100vh', transition: 'background-color 0.3s'}}>
      <button onClick={changeColor}>Change Color</button>
    </div>
    </>
  )
}

export default App
