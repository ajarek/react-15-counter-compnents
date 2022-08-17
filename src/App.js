import React from 'react'
import Counter from './components/counters/Counter'
const App = () => {
  return (
    <div>
      <Counter/>
      <Counter initialNumber={15}/>
      <Counter initialNumber={-15}/>
    </div>
  )
}

export default App
