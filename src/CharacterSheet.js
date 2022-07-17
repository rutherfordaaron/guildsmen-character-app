import { useState, useEffect } from "react";
import './App.css';
import Dice from './Dice';

const CharacterSheet = (props) => {
  let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  let initialCharacter;

  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name === props.character.name) {
      initialCharacter = characters[i]
    }
  }

  let [character, setCharacter] = useState(initialCharacter);
  let [diceState, setDiceState] = useState('hidden');
  let [diceStyle1, setDiceStyle1] = useState({ x: -45, y: -45 });
  let [diceStyle2, setDiceStyle2] = useState({ x: -45, y: -45 });
  let [message, setMessage] = useState(<div />);
  let [expStore, setExpStore] = useState(<div />);

  let characterList = [...characters];
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

  const skillCheck = (e) => {
    let skill = {};
    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name == e.target.value) {
        skill = character.skills[i];
      }
    }

    let rolls = rollDice();
    let modifier = skill.modifier;
    let modifierString;
    let name = skill.name;
    let total = rolls.num1 + rolls.num2 + modifier;

    if (modifier > -1) {
      modifierString = `+${modifier}`;
    }

    if (total >= 8) {
      let newCharacter = { ...character };
      newCharacter.experienceProgress++;

      if (newCharacter.experienceProgress > 4) {
        newCharacter.experience++;
        newCharacter.experienceProgress = 0;
      }

      setCharacter(newCharacter);
    }

    setMessage(
      <div className='message'>
        <p className="messageHead"><strong>{name} Check!</strong></p>
        <p>You rolled {rolls.num1} and {rolls.num2}.</p>
        <p>Your modifier is {modifierString || modifier}</p>
        <p className="messageTotal"><strong>Total: {total}</strong></p>
      </div>
    )
  }

  const primaryCheck = (e) => {
    let skill = {};
    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name == e.target.value) {
        skill = character.skills[i];
      }
    }

    if (!skill.spec1) {
      setDiceState('');
      setMessage(
        <div className='message'>
          <p className="messageHead"><strong>No primary specialty for {skill.name}!</strong></p>
          <p>A primary specialty is unlocked with 5 EXP, but requires a +2 in this skill. </p>
        </div>
      )
    } else {
      let rolls = rollDice();
      let modifier = skill.modifier + 2;
      let modifierString;
      let name = skill.name;
      let total = rolls.num1 + rolls.num2 + modifier;

      if (modifier > -1) {
        modifierString = `+${modifier}`;
      }

      if (total >= 8) {
        let newCharacter = { ...character };
        newCharacter.experienceProgress++;

        if (newCharacter.experienceProgress > 4) {
          newCharacter.experience++;
          newCharacter.experienceProgress = 0;
        }

        setCharacter(newCharacter);
      }

      setMessage(
        <div className='message'>
          <p className="messageHead"><strong>{name} Check!</strong></p>
          <p>You rolled {rolls.num1} and {rolls.num2}.</p>
          <p>Your modifier is {modifierString || modifier}</p>
          <p className="messageTotal"><strong>Total: {total}</strong></p>
        </div>
      )
    }
  }

  const secondaryCheck = (e) => {
    let skill = {};
    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name == e.target.value) {
        skill = character.skills[i];
      }
    }

    if (!skill.spec2) {
      setDiceState('');
      setMessage(
        <div className='message'>
          <p className="messageHead"><strong>No secondary specialty for {skill.name}!</strong></p>
          <p>A secondary specialty is unlocked with 4 EXP, but requires that this skill have a primary specialty.</p>
        </div>
      )
    } else {
      let rolls = rollDice();
      let modifier = skill.modifier + 1;
      let modifierString;
      let name = skill.name;
      let total = rolls.num1 + rolls.num2 + modifier;

      if (modifier > -1) {
        modifierString = `+${modifier}`;
      }

      if (total >= 8) {
        let newCharacter = { ...character };
        newCharacter.experienceProgress++;

        if (newCharacter.experienceProgress > 4) {
          newCharacter.experience++;
          newCharacter.experienceProgress = 0;
        }

        setCharacter(newCharacter);
      }

      setMessage(
        <div className='message'>
          <p className="messageHead"><strong>{name} Check!</strong></p>
          <p>You rolled {rolls.num1} and {rolls.num2}.</p>
          <p>Your modifier is {modifierString || modifier}</p>
          <p className="messageTotal"><strong>Total: {total}</strong></p>
        </div>
      )
    }
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

  const addHarm = () => {
    let newCharacter = { ...character };
    newCharacter.harm >= 10 ? newCharacter.harm = 10 : newCharacter.harm = character.harm + 1;

    setCharacter(newCharacter);
  }

  const minusHarm = () => {
    let newCharacter = { ...character };
    newCharacter.harm <= 0 ? newCharacter.harm = 0 : newCharacter.harm = character.harm - 1;

    setCharacter(newCharacter);
  }

  const spendExp = () => {

  }

  return (
    <div className='characterSheet'>
      {message}

      <Dice
        diceState={diceState}
        diceStyle1={diceStyle1}
        diceStyle2={diceStyle2}
      />

      <button type="button" className={`hideDice ${diceState}`} id="resetDiceButton" onClick={resetDice}>Close</button>

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
          return (
            <div key={`stat${i}`} className='stat'>
              <div className="labelContainer">
                <button type='button' value={el.name} className='diceButton'>
                  <input type='image' value={el.name} onClick={statCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                </button>
                <p>{el.name}:</p>
              </div>
              <div className="bubbleContainer">
                <div className='bubble filled'></div>
                <div className={el.modifier >= 0 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 1 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 2 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 3 ? 'bubble filled' : "bubble"}></div>
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
            <button type='button' value={character.luck} className='diceButton'>
              <input type='image' value={character.luck} onClick={luckCheck} src='/static/icons/dice-solid.svg' alt={`roll for Luck`} className='filter' />
            </button>
          </div>
          <div className="bubbleContainer">
            <div className="bubble filled"></div>
            <div className={character.luck >= -2 ? 'filled bubble' : 'bubble'}></div>
            <div className={character.luck >= -1 ? 'filled bubble' : 'bubble'}></div>
            <div className={character.luck >= 1 ? 'filled bubble' : 'bubble'}></div>
            <div className={character.luck >= 2 ? 'filled bubble' : 'bubble'}></div>
            <div className={character.luck >= 3 ? 'filled bubble' : 'bubble'}></div>
          </div>
        </div>
      </div>

      <div className="harmExpContainer">
        <div className='section harm'>
          <h2>Harm</h2>
          <div className="plusMinus">
            <button type='button'>
              <input type='image' onClick={minusHarm} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
            </button>
            <button type='button'>
              <input type='image' onClick={addHarm} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
            </button>
          </div>
          <div>
            <div className='bubbleContainer'>
              <div className={character.harm >= 1 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 2 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 3 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 4 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 5 ? 'filled bubble' : 'bubble'}></div>
            </div>
            <div className='bubbleContainer'>
              <div className={character.harm >= 6 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 7 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 8 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 9 ? 'filled bubble' : 'bubble'}></div>
              <div className={character.harm >= 10 ? 'filled bubble' : 'bubble'}></div>
            </div>
          </div>
          <div className="dying">
            <p>Dying</p>
            <div className="bubble" />
          </div>
        </div>

        <div className="section experience">
          <h2>Experience</h2>
          <div className="bubbleContainer">
            <div className={character.experienceProgress >= 1 ? "filled bubble" : "bubble"} />
            <div className={character.experienceProgress >= 2 ? "filled bubble" : "bubble"} />
            <div className={character.experienceProgress >= 3 ? "filled bubble" : "bubble"} />
            <div className={character.experienceProgress >= 4 ? "filled bubble" : "bubble"} />
          </div>
          <div className="experiencePoints">
            <p><strong>{character.experience}</strong></p>
          </div>
          <button type="button" onClick={spendExp} className="expBtn">Spend EXP</button>
        </div>
      </div>

      <div className="section skills">
        <h2>Skills</h2>
        <div className="skillsGrid">
          {character.skills.map((el, i) => {
            return (
              <div key={`stat${i}`} className={`skillContainer ${el.name === 'Throwdown' ? 'throwdown' : 'skill'}`}>
                <div className="labelContainer">
                  <button type='button' className='diceButton'>
                    <input type='image' value={el.name} onClick={skillCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                  </button>
                  <p><em>{el.name}</em></p>
                </div>

                <div className="statModifiers">
                  <p>-1</p>
                  <p>+0</p>
                  <p>+1</p>
                  <p>+2</p>
                  <p>+3</p>
                </div>
                <div className="bubbleContainer">
                  <div className='bubble filled'></div>
                  <div className={el.modifier >= 0 ? 'bubble filled' : "bubble"}></div>
                  <div className={el.modifier >= 1 ? 'bubble filled' : "bubble"}></div>
                  <div className={el.modifier >= 2 ? 'bubble filled' : "bubble"}></div>
                  <div className={el.modifier >= 3 ? 'bubble filled' : "bubble"}></div>
                </div>

                <div className="specialtyContainer">
                  <div className="specialty">
                    <button type='button' className='diceButton'>
                      <input type='image' value={el.name} onClick={primaryCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                    </button>
                    <p>{el.spec1 || 'Primary'} (+2)</p>
                  </div>
                  <div className="specialty">
                    <button type='button' className='diceButton'>
                      <input type='image' value={el.name} onClick={secondaryCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                    </button>
                    <p>{el.spec2 || 'Secondary'} (+1)</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CharacterSheet;