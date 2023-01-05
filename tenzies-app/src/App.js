import React from 'react'
import Die from './Die'
import Congrats from './Congrats'

function App() {

  const [dice, setDice] = React.useState(allNewDice());

    const [tenzies, setTenzies] = React.useState(false);
    
    const [numRolls, setNumRolls] = React.useState(0);

    const [time, setTime] = React.useState()

    const [record, setRecord] = React.useState(JSON.parse(localStorage.getItem("record")) || [])

    const [bestRecord, setBestRecord] = React.useState()
    
    React.useEffect(() => {
      if(dice.every(tenzy => dice[0].value === tenzy.value && tenzy.isHeld)){
        setTenzies(true);
        setTime(prevTime => Math.round((new Date() - prevTime) / 1000));
        localStorage.setItem("record", JSON.stringify(record))
        setRecord(prevRecord => [...prevRecord, numRolls])
        setBestRecord((record.sort( (a, b) => b - a))[record.length-1])
      }
      else{
        setTenzies(false)
      }
    }, [dice])

  function checkTime(getTime){
    if (getTime > 59 && getTime < 3600){
      return <div>You won this with {getTime/60} minutes!🎉</div> 
    }
    if(getTime > 3600){
      return <div style={{display : 'none'}}></div>
    }
    else{
      return <div>You won this with {getTime} seconds!🎉</div> 
    }
  }

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
    if(numRolls === 0){
      setTime(new Date())
    }
    setNumRolls(prevNum => prevNum + 1);
    if(!tenzies){setDice(prevDice => prevDice.map(elem => {
      {if(elem.isHeld){
        return elem
      }else{
        return generateNewDie();
      }
    }}))
  }
    else{
      setDice(allNewDice())
      setNumRolls(0);
    }
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
          
          <button onClick={rollBtn} className="roll-btn">{tenzies?"Start new game":"Roll"}</button>

          <h2>{tenzies? <span>You won with count of rolls: {numRolls}</span>: <span>Count of your rolls: {numRolls} ✨</span>}</h2>
          <h2>{tenzies?<span>{checkTime(time)}</span>: false}</h2>
          {tenzies && record.length > 1 && <strong>Your previous best record is: {bestRecord}! 🔥</strong>}
          {tenzies && <Congrats />}
      </main>
  );
}

export default App;
