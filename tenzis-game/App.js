import './App.css';
import Die from './components/Die'
import React from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10;i++) {
      newDice.push(
        generateNewDie()
    ) 
    }
    return newDice
  }

  function generateNewDie() {
    function countDots() {
      let generated = Math.ceil(Math.random() * 6)
      console.log(generated)
      if(generated == 1) {
        return "•"
      } else if (generated == 2) {
        return "••"
      } else if (generated == 3){
        return "•••"
      } else if (generated == 4){
       return ("••••")
      } else if (generated == 5) {
        return "•••••"
      } else {
        return "••••••"
      }
    }
    
    return (
      {value: countDots(), 
      isHeld: false, 
      id: nanoid()}
    )
  }

  const [dice, setDice] = React.useState(allNewDice())

  // function generateDice() {
  //   setRanNums((prevNum) => prevNum.map(num => <Die value={num} />))
  // }
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} clicked={() => holdDice(die.id)}/>)

  function rollDice() {
    !tenzis ?
   setDice(prevVal => prevVal.map(die => {
    return die.isHeld === false ?
      generateNewDie() :
      die
   
     })) 
     :
   setDice(allNewDice())
   setTenzis(false)
  }

  function holdDice(id) {
    rolls()
    setDice(prevVal => prevVal.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const [tenzis, setTenzis] = React.useState(false)

  React.useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if(allHeld && allSameValue) {
        setTenzis(true)
      }
  }, [dice])
  let countRolls = -1
  function rolls() {
    countRolls++
    return countRolls
  }

  return (
    <main>
        {tenzis && <Confetti/>}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <h2>Elo {rolls()}</h2>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>
          {tenzis ? "New Game" : "Roll Dice"}
          
        </button>
      </main>
  )
}

export default App;
