

import React, {useState} from 'react'

const Display = ({counter})=> <div> {counter}</div>

const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button  onClick={handleClick}>
      {text}
    </button>
  )

  const App = () => {
    const [clicks, setClicks] = useState({
      left: 0, right: 0
    })
    const [allClicks,setAll] = useState([])
  
    const handleLeftClick = () => {
      const newClicks = { 
        ...clicks, 
        left: clicks.left + 1, 
      }
      setClicks(newClicks)
      setAll(allClicks.concat('L'))
    }
  
    const handleRightClick = () => {
      const newClicks = { 
        ...clicks,  
        right: clicks.right + 1 
      }
      setClicks(newClicks)
      setAll(allClicks.concat('R'))
    }
  
    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
        <History allClicks={allClicks} />
      </div>
    )
  }

export default App
