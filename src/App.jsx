import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Home from './assets/components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Home />
      
    </div>
  )
}

export default App
