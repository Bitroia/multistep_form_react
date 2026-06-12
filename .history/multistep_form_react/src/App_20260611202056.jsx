import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>React Multistep</h1>
      <div className='header'></div>
    </div>
  )
}

export default App
