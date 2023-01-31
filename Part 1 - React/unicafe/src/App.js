import React, { useState } from 'react'


const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)
  
  console.log(total, average, positive)

  if (total === 0) {
    return(
    <div>
      No feedback given
    </div>
    )
  } return(
  <div><table>
    <tbody>
    <tr><td>good {clicks.good}</td></tr>
    <tr><td>neutral {clicks.neutral}</td></tr>
    <tr><td>bad {clicks.bad}</td></tr>
    <tr><td>total {total}</td></tr>
    <tr><td>average {average}</td></tr>
    <tr><td>positive {positive}</td></tr>
      
    </tbody>
  </table></div>
)
  }

const Button = (props) => (
  <button onClick ={props.handleClick}>{props.text}</button>
  )

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad:0})

  const handleGoodClick =  () => setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick =  () => setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick =  () => setClicks({...clicks, bad: clicks.bad + 1})
  
  console.log(clicks)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <br></br>
      <h1>statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  )
}


export default App

