import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Crazy React Landing Page</h1>
      <p className="read-the-docs">
        Crazy Google map:
         A.K.A Not so free anymore, have to input a credit card and such to get a free trial.
      </p>
    </>
  )
}

export default App
