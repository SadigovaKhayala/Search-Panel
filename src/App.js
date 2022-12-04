import { React, useState, useEffect } from 'react'

import Search from './Search'
import Posts from './Posts'
import './App.css'

function App() {
  const arr = []
  let [input, setInput] = useState('')
  const handleInput = (event) => {
    setInput(event.target.value)
  }
  useEffect(() => {}, [input.toLowerCase(), input.toLocaleUpperCase()])
  Posts().forEach((el) => {
    if (el.toLowerCase().includes(input) || el.toUpperCase().includes(input)) {
      arr.push(el.toLowerCase())
    }
  })
  return (
    <div className=" container">
      <header>Welcome to Our Zoo Land </header>
      <div>
        {Search(input, handleInput, arr)}
        <div className="findedElementCount">
          <p> Search result match : {arr.length} animal name</p>
        </div>
      </div>
    </div>
  )
}

export default App
