import Dice from "../Dice";
import { useState } from "react";

const Luck = (props) => {
  let [diceState, setDiceState] = useState("hidden");
  // Initial rotation of dice
  let [diceStyle1, setDiceStyle1] = useState({ x: -45, y: -45 });
  let [diceStyle2, setDiceStyle2] = useState({ x: -45, y: -45 });

  const rollLuck = () => {
    let rolls = rollDice();
    let luck;
    switch (rolls.num1) {
      case 1:
        luck = -3;
        break;
      case 2:
        luck = -2;
        break;
      case 3:
        luck = -1;
        break;
      case 4:
        luck = 1;
        break;
      case 5:
        luck = 2;
        break;
      case 6:
        luck = 3;
        break;
    }
    props.setLuck(luck);
  }
  /**
   * Finds XY rotation when the dice is rolled to get the correct number to show to the user. Will animate the dice according to the set rotations.
   * @param {random number 1 - 6, determined in diceRoll()} num1 
   * @param {random number 1 - 6, determined in diceRoll()} num2 
   * @returns rotations of the dice to show the numbers gernerated
   */
  const findXYRotation = (num1, num2) => {
    let rotations = { x1: 0, y1: 0, x2: 0, y2: 0 }

    switch (num1) {
      case 1:
        rotations.x1 = 450;
        rotations.y1 = 360;
        break;
      case 2:
        rotations.x1 = 540;
        rotations.y1 = 360;
        break;
      case 3:
        rotations.x1 = 360;
        rotations.y1 = -450;
        break;
      case 4:
        rotations.x1 = 360;
        rotations.y1 = 360;
        break;
      case 5:
        rotations.x1 = 360;
        rotations.y1 = 450;
        break;
      case 6:
        rotations.x1 = -450;
        rotations.y1 = 450;
        break;
      default:
        console.log(`Something went wrong! ${num1} is not a number 1 through 6.`);
    }

    switch (num2) {
      case 1:
        rotations.x2 = 450;
        rotations.y2 = 360;
        break;
      case 2:
        rotations.x2 = 540;
        rotations.y2 = 360;
        break;
      case 3:
        rotations.x2 = 360;
        rotations.y2 = -450;
        break;
      case 4:
        rotations.x2 = 360;
        rotations.y2 = 360;
        break;
      case 5:
        rotations.x2 = 360;
        rotations.y2 = 450;
        break;
      case 6:
        rotations.x2 = -450;
        rotations.y2 = 450;
        break;
      default:
        console.log(`Something went wrong! ${num2} is not a number 1 through 6.`);
    }
    return (rotations);
  }

  /**
   * Generates two random numbers of 1 - 6
   * Finds the rotation needed to show numbers generated via findXYRotation()
   * Calls increaseNeed() to increase players need if their addiction is true (> 0)
   * Shows dice if their currently hidden via setDiceState()
   * * Effectively removes the "hidden" class from the dice component
   * Sets the dice rotations returned from findXYRotations() to the dice via setDiceStyle1()/setDiceStyle2()
   * @returns the numbers rolled for use in other functions
   */
  const rollDice = () => {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    const rolls = { num1: num1, num2: num2 };

    let rotations = findXYRotation(num1, num2);

    if (diceState === 'hidden') {
      setDiceState('');
      document.getElementById("dice2").classList.add("hidden");
    }

    setDiceStyle1({ x: rotations.x1, y: rotations.y1 });
    setDiceStyle2({ x: rotations.x2, y: rotations.y2 });

    return (rolls)
  }

  return (
    <div>
      <Dice
        diceState={diceState}
        diceStyle1={diceStyle1}
        diceStyle2={diceStyle2}
        message={<div />}
        resetDice={() => {
          setDiceState("hidden");
          document.getElementById("luckBtn").classList.add("hidden")
        }}
      />
      <h2>Time to Roll for Luck!</h2>
      <p>Next, you will roll a 1, 6-sided die to determine how lucky your character is. This cannot be changed <em>at all</em> once the die is rolled. So, let's hope the gods are feeling generous.</p>

      <button
        className={`luckBtn ${props.luck ? "hidden" : ""}`}
        type="button"
        onClick={rollLuck}
        id="luckBtn"
      >
        Roll for Luck
      </button>

      <p className="center luckText">
        Your character's Luck:
        {!props.luck ? " Undecided" : props.luck > 0 ? ` +${props.luck}` : ` ${props.luck}`}
      </p>

      <table className='raceStatTable'>
        <thead>
          <tr>
            <th colSpan='2'>Luck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bottom left'>1</td>
            <td className='bottom right'>-3</td>
          </tr>
          <tr>
            <td className='bottom left'>2</td>
            <td className='bottom right'>-2</td>
          </tr>
          <tr>
            <td className='bottom left'>3</td>
            <td className='bottom right'>-1</td>
          </tr>
          <tr>
            <td className='bottom left'>4</td>
            <td className='bottom right'>+1</td>
          </tr>
          <tr>
            <td className='bottom left'>5</td>
            <td className='bottom right'>+2</td>
          </tr>
          <tr>
            <td className='bottom left'>6</td>
            <td className='bottom right'>+3</td>
          </tr>
        </tbody>
      </table>

      <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the modifier you get here. The higher the total number, the better the outcome.</p>

      <div className="warning fadeOut hidden" id="warning">
        <p className="center">You must roll for Luck moving on!</p>
      </div>
    </div>
  )
}

export default Luck;