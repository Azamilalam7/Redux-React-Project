import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [theme, setTheme] = useState('dark')
  // console.log(count)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  const Increment = () => {
    setCount(count+1)
  }
  const Decrement = () => {
    if(count===0){
      console.error("Can't Go To Negative System Not Allow")
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
   <div className={theme}>
      <p>Count : {count}</p>
     <button onClick={Increment}>+</button>
     <button onClick={Decrement}>-</button>
     <button onClick={() => setCount(0)}>Refresh</button>
     <button onClick={toggleTheme}>Toggle Theme</button>
   </div>
    </>
  )
}

export default App
