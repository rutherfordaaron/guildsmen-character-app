import { useState, useEffect } from "react";
import './App.css';
import Dice from './Dice';

const CharacterSheet = (props) => {
  let [character, setCharacter] = useState(props.character);
  let [diceState, setDiceState] = useState('hidden');
  let [diceStyle1, setDiceStyle1] = useState({ x: -45, y: -45 });
  let [diceStyle2, setDiceStyle2] = useState({ x: -45, y: -45 });
  let [message, setMessage] = useState(<div />)

  let characterList = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  let index = props.index;
  let initialRotation = { x: -45, y: -45 }

  useEffect(() => {
    characterList[index] = character;
    localStorage.setItem('guildsmenCharacters', JSON.stringify(characterList));
  });

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
        break;
    }
    return (rotations);
  }


  const rollDice = () => {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    const rolls = { num1: num1, num2: num2 };

    let rotations = findXYRotation(num1, num2);

    if (diceState === 'hidden') {
      setDiceState('');
    }

    setDiceStyle1({ x: rotations.x1, y: rotations.y1 });
    setDiceStyle2({ x: rotations.x2, y: rotations.y2 });

    return (rolls)
  }

  const resetDice = () => {
    setDiceState('hidden');
    setDiceStyle1(initialRotation);
    setDiceStyle2(initialRotation);
    setMessage(<div />);
  }

  const fillBubbles = (modifier) => {
    let fillObj = {
      minusOne: '',
      zero: '',
      one: '',
      two: '',
      three: ''
    }
    switch (modifier) {
      case 3:
        fillObj.three = 'filled';
      case 2:
        fillObj.two = 'filled';
      case 1:
        fillObj.one = 'filled';
      case 0:
        fillObj.zero = 'filled';
      case -1:
        fillObj.minusOne = 'filled';
        break;
      default:
        console.log(`Something went wrong! ${modifier} is not a number of -1 through 3.`)
    }

    return (fillObj);
  }

  const getLuckBubbles = () => {
    let minus3, minus2, minus1, plus1, plus2, plus3 = '';
    switch (Number(character.luck)) {
      case 3:
        plus3 = 'filled';
      case 2:
        plus2 = 'filled';
      case 1:
        plus1 = 'filled';
      case -1:
        minus1 = 'filled';
      case -2:
        minus2 = 'filled';
      case -3:
        minus3 = 'filled';
        break;
      default:
        console.log(`Something went wrong! ${character.luck} is not a number between -3 and +3, excluding 0`);
    }
    return (
      <div className="bubbleContainer">
        <div className={`bubble ${minus3}`}></div>
        <div className={`bubble ${minus2}`}></div>
        <div className={`bubble ${minus1}`}></div>
        <div className={`bubble ${plus1}`}></div>
        <div className={`bubble ${plus2}`}></div>
        <div className={`bubble ${plus3}`}></div>
      </div>
    )
  }

  const statCheck = (e) => {
    let stat = {};
    for (let i = 0; i < character.stats.length; i++) {
      if (character.stats[i].name == e.target.value) {
        stat = character.stats[i];
      }
    }

    let rolls = rollDice();
    let modifier = stat.modifier;
    let modifierString;
    let name = stat.name;

    if (modifier > -1) {
      modifierString = `+${modifier}`;
    }

    setMessage(
      <div className='message'>
        <p className="messageHead"><strong>{name} Check!</strong></p>
        <p>You rolled {rolls.num1} and {rolls.num2}.</p>
        <p>Your modifier is {modifierString || modifier}</p>
        <p className="messageTotal"><strong>Total: {rolls.num1 + rolls.num2 + modifier}</strong></p>
      </div>
    )
  }

  const luckCheck = () => {
    let rolls = rollDice();
    let modifier = Number(character.luck);
    let modifierString;
    let name = 'Luck';

    if (modifier > -1) {
      modifierString = `+${modifier}`;
    }

    setMessage(
      <div className='message'>
        <p className="messageHead"><strong>{name} Check!</strong></p>
        <p>You rolled {rolls.num1} and {rolls.num2}.</p>
        <p>Your modifier is {modifierString || modifier}</p>
        <p className="messageTotal"><strong>Total: {rolls.num1 + rolls.num2 + modifier}</strong></p>
      </div>
    )
  }

  return (
    <div>
      {message}

      <Dice
        diceState={diceState}
        diceStyle1={diceStyle1}
        diceStyle2={diceStyle2}
      />

      <div animate={{ x: '100px' }} className="hideDiceContainer">
        <button type="button" className={`hideDice ${diceState}`} id="resetDiceButton" onClick={resetDice}>Hide Dice</button>
      </div>

      <h1><span className="name">{character.name}</span><br /><span className="guild">{character.guild} Guild</span></h1>
      <div className="character section">
        <h2>Character</h2>
        <p><strong>Race:</strong> {character.race}</p>
        <p><strong>Demeanor:</strong> {character.demeanor}</p>
        <p><strong>Physique:</strong> {character.physique}</p>
      </div>

      <div className="section">
        <h2>Stats</h2>
        <div className="stat">
          <div></div>
          <div className="statModifiers">
            <p>-1</p>
            <p>0</p>
            <p>+1</p>
            <p>+2</p>
            <p>+3</p>
          </div>
        </div>
        {character.stats.map((el, i) => {
          let fill = fillBubbles(el.modifier);
          return (
            <div key={`stat${i}`} className='stat'>
              <div className="labelContainer">
                <button type='button' value={el.name} onClick={statCheck} className='diceButton'>
                  <input type='image' value={el.name} onClick={statCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                </button>
                <p>{el.name}:</p>
              </div>
              <div className="bubbleContainer">
                <div className={`bubble ${fill.minusOne}`}></div>
                <div className={`bubble ${fill.zero}`}></div>
                <div className={`bubble ${fill.one}`}></div>
                <div className={`bubble ${fill.two}`}></div>
                <div className={`bubble ${fill.three}`}></div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="section luck">
        <h2>Luck</h2>
        <div className="stat">
          <div></div>
          <div className="statModifiers">
            <p>-3</p>
            <p>-2</p>
            <p>-1</p>
            <p>+1</p>
            <p>+2</p>
            <p>+3</p>
          </div>
        </div>
        <div className="stat">
          <div className='labelContainer'>
            <button type='button' value={character.luck} onClick={luckCheck} className='diceButton'>
              <input type='image' value={character.luck} onClick={luckCheck} src='/static/icons/dice-solid.svg' alt={`roll for Luck`} className='filter' />
            </button>
          </div>
          {getLuckBubbles()}
        </div>
      </div>
    </div>
  )
}

export default CharacterSheet;