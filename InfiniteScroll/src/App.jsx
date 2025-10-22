import { useState } from 'react'

import LoadMoreProduct from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadMoreProduct/>
    </>
  )
}

export default App
