import React, {useState} from 'react'

function CompA() {
  // return (
  //   <div>
  //     <h1>CompA</h1>
  //     <p>Hello Comp A</p>
  //   </div>
  // )

  return(
    React.createElement('div',null,
      React.createElement('h1',null,'CompA'),
      React.createElement('p',null,'Hello Comp A')
    )
  )
}

class CompC extends React.Component {
  render() {
    return(
      <h1>CompC</h1>
    )
  }
}


export default function Home() {
  const [value, setValue] = useState(10)

  // const increment = () => {
  //   setValue(value + 1)
  // }

  // const decrement = () => {
  //   setValue(value - 1)
  // }

  return (
    <>
      Current Value: <h1>{ value }</h1>
      <button onClick={() => {setValue(value - 1)}}>-</button>
      <button onClick={() => {setValue(value + 1)}}>+</button>
    </>
  );
}
