import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>React Multistep</h1>
      <div className='header'>
        <h2>Deixe sua avalização</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className=''></div>
    </div>
  )
}

export default App
