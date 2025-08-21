import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-extrabold text-5xl bg-amber-500'>
        React App is working.
      </div>
    </>
  )
}

export default App
