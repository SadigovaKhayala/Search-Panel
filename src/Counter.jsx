import React, { useState } from 'react'

let Counter = () => {
  let [count, setCount] = useState('0')

  function incriment() {
    setCount((prev) => parseInt(prev + 1))
    return setCount
  }

  function getRandomNumberBetween(min, max) {
    min = 0
    max = 8
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incriment}>Button</button>
      <div>{getRandomNumberBetween()}</div>
    </div>
  )
}

export default Counter

function Random(props) {
  var maxNumber = 45
  var randomNumber = Math.floor(Math.random() * maxNumber + 1)
  return <div>{randomNumber}</div>
}
