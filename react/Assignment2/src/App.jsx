import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeCountParent from './LikeCountParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LikeCountParent/>
    </>
  )
}

export default App
