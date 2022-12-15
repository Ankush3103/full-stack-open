import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div><h1>{props.course}</h1></div>
  )
}

const Part = (props) => {
  return (
    <div><p>
      {props.content.name} {props.content.exercises}
    </p></div>
  )
}

const Content = (props) => {
  return (
    <div>
      <div>
        <p></p>
        <Part content={props.content[0]} />
        <Part content={props.content[1]} />
        <Part content={props.content[2]} />
      </div>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} </p>
    </div>
  )
}
const App = () => {

  const prs = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={prs.name} />
      <Content content={prs.parts} />
      <Total total={prs.parts} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App
