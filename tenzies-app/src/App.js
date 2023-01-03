import React from 'react'
import Die from './Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice());

    const [tenzy, setTenzy] = React.useState(false)
  
  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: (Math.random() + 1).toString(36).substring(7)
    }
    
  }

  function allNewDice(){
    const newDice = []; 
    for(let i = 0; i < 10; i++){
        newDice.push(generateNewDie())
    }
    return newDice
  }
  function holdDice(id){
    setDice(prevDice => prevDice.map(elem => {
      {if(elem.id === id){
        return {...elem, isHeld : !elem.isHeld}
      }else{
        return elem
      }
    }}
    ))
  }

  function rollBtn(){
    setDice(prevDice => prevDice.map(elem => {
      {if(elem.isHeld){
        return elem
      }else{
        return generateNewDie()
      }
    }}))
  }
  const diceElements = dice.map(element => <Die 
    key={element.id} 
    value={element.value} 
    isHeld={element.isHeld} 
    holdDice={() => {holdDice(element.id)}}
  />)

  return (
      <main>
          <h1 className="title">Tenzies</h1>
          <h2 className="description"> 
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </h2>
          <div className="tenzies">
           {diceElements}
          </div>
          
          <button onClick={rollBtn} className="roll-btn">Roll</button>
      </main>
  );
}

export default App;
