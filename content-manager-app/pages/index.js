import React from 'react'

function CompA() {
  // return (
  //   <div>
  //     <h1>CompA</h1>
  //     <p>Hello Comp A</p>
  //     <CompB />
  //   </div>
  // )

  return(
    React.createElement('div',null,
      React.createElement('h1',null,'CompA'),
      React.createElement('p',null,'Hello Comp A'),
      React.createElement(CompB)
    )
  )
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp B</p>
    </>
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
  return (
    <>
      <h1>Hello World</h1>
      <CompA />
      <CompC />
    </>
  );
}
