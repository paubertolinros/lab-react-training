import React, { useState} from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';

const Dice = () => {
  const diceArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
  const [diceImage, setDiceImage] = useState(diceEmpty);
  
  const handleClickDice = () => {
    setDiceImage(diceEmpty);
    setTimeout(() => {
      const randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];
      setDiceImage(randomDice)
    }, 1000)
  };

  return (
    <section className="section-dice">
      <img className="dice-image" src={diceImage} onClick={handleClickDice} alt="dice" />
    </section>
  )
}

export default Dice;