import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>React Multistep</h1>
      <div className='header'>
        <h2>Deixe sua avalizaç</h2>
      </div>
    </div>
  )
}

export default App
