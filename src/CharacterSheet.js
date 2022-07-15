import { useState, useEffect } from "react";
import './App.css';
import Dice from './Dice';

const CharacterSheet = (props) => {
  let [character, setCharacter] = useState(props.character);
  let [diceState, setDiceState] = useState('');
  let [diceStyle1, setDiceStyle1] = useState({ x: -45, y: -45 });
  let [diceStyle2, setDiceStyle2] = useState({ x: -45, y: -45 });
  let [modifier, setModifier] = useState(-1);

  let characterList = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  let index = props.index;
  let initialRotation = { x: -45, y: -45 }

  useEffect(() => {
    characterList[index] = character;
    localStorage.setItem('guildsmenCharacters', JSON.stringify(characterList));
  });


  const rollDice = (e) => {
    let modifier = e.target.value;
    console.log(e.target);
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    let x1, y1, x2, y2;

    switch (num1) {
      case 1:
        x1 = 450;
        y1 = 360;
        break;
      case 2:
        x1 = 540;
        y1 = 360;
        break;
      case 3:
        x1 = 360;
        y1 = -450;
        break;
      case 4:
        x1 = 360;
        y1 = 360;
        break;
      case 5:
        x1 = 360;
        y1 = 450;
        break;
      case 6:
        x1 = -450;
        y1 = 450;
        break;
      default:
        console.log('something went wrong!');
    }

    switch (num2) {
      case 1:
        x2 = 450;
        y2 = 360;
        break;
      case 2:
        x2 = 540;
        y2 = 360;
        break;
      case 3:
        x2 = 360;
        y2 = -450;
        break;
      case 4:
        x2 = 360;
        y2 = 360;
        break;
      case 5:
        x2 = 360;
        y2 = 450;
        break;
      case 6:
        x2 = -450;
        y2 = 450;
        break;
      default:
        console.log('something went wrong!');
        break;
    }
    if (diceState === 'hidden') {
      showDice();
      setDiceStyle1({ x: x1, y: y1 });
      setDiceStyle2({ x: x2, y: y2 });
    } else {
      setDiceStyle1({ x: x1, y: y1 });
      setDiceStyle2({ x: x2, y: y2 });
    }
    console.log(`${num1} + ${num2} + ${modifier}`);
  }

  const showDice = () => {
    setDiceState('');
  }

  const resetDice = () => {
    setDiceState('hidden');
    setDiceStyle1(initialRotation);
    setDiceStyle2(initialRotation);

    /*dice1.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`;
    dice2.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`;*/
  }

  return (
    <div>
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
          let one, two, three, four;
          return (
            <div key={`stat${i}`} className='stat'>
              <div className="labelContainer">
                <button type='button' value={el.modifier} onClick={rollDice} className='diceButton'>
                  <input type='image' value={el.modifier} onClick={rollDice} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                </button>
                <p>{el.name}:</p>
              </div>
              <div className="bubbleContainer">
                <div className="bubble filled"></div>
                <div className={`bubble`}></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CharacterSheet;