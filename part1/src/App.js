

import React from 'react'


const Hello = ({name,age}) =>{

  const bornYear = () => new Date().getFullYear() - age

  return (
      <div>
        <p> Hello {name} , you are {age} years old</p>
       <p>
        So were probably born in {bornYear()}
       </p> 
       </div> 
    )
}

const App = (props) => {
  const {counter} = props
  return (
    <div>
      {counter}
    </div>
  )
}

export default App
