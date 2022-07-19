import { useState, useEffect } from "react";
import './css/App.css';
import Dice from './Dice';
import ExpStore from "./ExpStore";

const CharacterSheet = (props) => {
  let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  let initialCharacter;
  const addArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const weaArr = [1, 2, 3, 4, 5];

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
  let [warning, setWarning] = useState("I is warning!")

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

    if (character.addiction) {
      increaseNeed();
    }

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
      if (character.stats[i].name === e) {
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

    return (rolls.num1 + rolls.num2 + modifier)
  }

  const skillCheck = (e) => {
    let skill = {};
    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name === e) {
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

      if (newCharacter.experienceProgress >= 4) {
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

    return (rolls.num1 + rolls.num2 + modifier)
  }

  const primaryCheck = (e) => {
    let skill = {};
    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name === e.target.value) {
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
      if (character.skills[i].name === e.target.value) {
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
    if (newCharacter.harm >= 10) {
      newCharacter.deathMsg = "You died...";
      newCharacter.dead = true;
    }

    setCharacter(newCharacter);
  }

  const minusHarm = () => {
    let newCharacter = { ...character };
    newCharacter.harm <= 0 ? newCharacter.harm = 0 : newCharacter.harm = character.harm - 1;

    setCharacter(newCharacter);
  }

  const startExpStore = () => {
    setExpStore(
      <ExpStore
        closeExpStore={closeExpStore}
        character={character}
        setCharacter={setCharacter}
      />
    );
  }

  const closeExpStore = () => {
    setExpStore(<div />);
  }

  const addMyth = () => {
    let newCharacter = { ...character };
    if (!newCharacter.everAddicted) {
      newCharacter.addiction = 1;
      newCharacter.addictionProgress = 3;
      newCharacter.everAddicted = true;
    }

    if (newCharacter.mythUses >= 6) {
      newCharacter.harm = 10;
      newCharacter.dying = true;
      newCharacter.dead = true;
      newCharacter.deathMsg = "You died from an overdose of Myth..";
    } else {
      newCharacter.mythUses++;
      newCharacter.need = 0;
      newCharacter.addictionProgress++;
      newCharacter.addiction = Math.floor(newCharacter.addictionProgress / 3);
    }
    setCharacter(newCharacter);
  }

  const minusMyth = () => {
    let newCharacter = { ...character };
    if (newCharacter.mythUses > 0) {
      newCharacter.mythUses--;
    }
    setCharacter(newCharacter);
  }

  const toggleDying = () => {
    let newCharacter = { ...character };
    newCharacter.dying = !newCharacter.dying;
    setCharacter(newCharacter);
  }

  const resurrect = () => {
    let newCharacter = { ...character };
    newCharacter.dead = false;
    newCharacter.harm = 0;
    newCharacter.dying = false;
    newCharacter.mythUses = 0;
    newCharacter.need = 0;
    setCharacter(newCharacter);
  }

  const increaseNeed = () => {
    let newCharacter = { ...character };
    let constitution;

    for (let i = 0; i < newCharacter.stats.length; i++) {
      if (newCharacter.stats[i].name === "Constitution") {
        constitution = newCharacter.stats[i]
      }
    }

    if (newCharacter.need !== (newCharacter.addiction - 8) * -1 + 1) {
      newCharacter.need++;
    } else {
      setWarning("Taking damage from Myth addiction need..");
      document.getElementById("warning").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("warning").classList.add("hidden");
      }, 2000)

      const num1 = Math.floor(Math.random() * 6 + 1);
      const num2 = Math.floor(Math.random() * 6 + 1);
      console.log(`${num1} + ${num2} + ${constitution.modifier}`);

      if (num1 + num2 + constitution.modifier >= 10) {
        newCharacter.harm += Math.round(newCharacter.addiction / 2);
        console.log(Math.round(newCharacter.addiction / 2))
        newCharacter.need = 0;
      } else {
        newCharacter.harm += newCharacter.addiction;
        console.log(newCharacter.addiction)
        newCharacter.need = 0;
      }

      newCharacter.addictionProgress--;
      newCharacter.addiction = Math.floor(newCharacter.addictionProgress / 3);
    }

    if (newCharacter.harm >= 10) {
      newCharacter.dead = true;
      newCharacter.deathMsg = "You died from a Myth withdrawl.."
    }

    setCharacter(newCharacter);
  }

  const minusWealth = () => {
    let newCharacter = { ...character };
    if (newCharacter.wealth > 1) {
      newCharacter.wealth--;
    }
    setCharacter(newCharacter);
  }

  const addWealth = () => {
    let newCharacter = { ...character };
    if (newCharacter.wealth < 5) {
      newCharacter.wealth++;
    }
    setCharacter(newCharacter);
  }

  const handleGearInput = (e) => {
    console.log('gear input');
    if (e.which === 13 || e.target.id === 'gearButtn') {
      let newCharacter = { ...character };
      newCharacter.gear.push(e.target.value);

      e.target.value = "";
      setCharacter(newCharacter);
    }
  }

  const handleGearBtn = () => {
    let newCharacter = { ...character };
    newCharacter.gear.push(document.getElementById('gearInput').value);
    document.getElementById('gearInput').value = "";
    setCharacter(newCharacter);

  }

  const removeGearItem = (e) => {
    let newCharacter = { ...character };
    let index = newCharacter.gear.indexOf(e.target.value);
    newCharacter.gear = newCharacter.gear.filter(item => item !== newCharacter.gear[index]);

    setCharacter(newCharacter);
  }

  const detailsChange = (e) => {
    let newCharacter = { ...character };
    for (let i = 0; i < newCharacter.details.length; i++) {
      if (newCharacter.details[i].name === e.target.name) {
        newCharacter.details[index].content = e.target.value;
      }
    }

    setCharacter(newCharacter);
  }



  return (
    <div className='characterSheet'>
      <Dice
        diceState={diceState}
        diceStyle1={diceStyle1}
        diceStyle2={diceStyle2}
        message={message}
        resetDice={resetDice}
      />

      <h1><span className="name">{character.name}</span><br /><span className="guild">{character.guild} Guild</span></h1>
      <div className="character section">
        <h2>Character</h2>
        <p><strong>Race:</strong> {character.race}</p>
        <p><strong>Demeanor:</strong> {character.demeanor}</p>
        <p><strong>Physique:</strong> {character.physique}</p>
      </div>

      <div className="section stats">
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
                  <input type='image' value={el.name} onClick={() => { statCheck(el.name) }} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
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
            <button type='button' className='diceButton'>
              <input type='image' onClick={minusHarm} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
            </button>
            <button type='button' className='diceButton'>
              <input type='image' onClick={addHarm} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
            </button>
          </div>
          <div>
            <div className='bubbleContainer'>
              <div className={character.harm >= 1 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 2 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 3 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 4 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 5 ? 'redFill bubble' : 'bubble'}></div>
            </div>
            <div className='bubbleContainer'>
              <div className={character.harm >= 6 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 7 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 8 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 9 ? 'redFill bubble' : 'bubble'}></div>
              <div className={character.harm >= 10 ? 'redFill bubble' : 'bubble'}></div>
            </div>
          </div>
          <div className="dying">
            <p onClick={toggleDying}>Dying</p>
            <div className={`bubble ${character.dying ? "redFill" : ""}`} onClick={toggleDying} />
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
          <button type="button" onClick={startExpStore} className="expBtn">Spend EXP</button>
          {expStore}
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
                    <input type='image' value={el.name} onClick={() => { skillCheck(el.name) }} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
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

      <div className="section addiction">
        <h2>Myth Addiction</h2>
        <p>Level</p>
        <div className="addLevel">
          <p>0</p>
          {addArr.map((el, i) => {
            if (el % 3 === 0) {
              return (
                <p key={`addLevel${el / 3}`} className={character.addiction >= el / 3 ? "levelBold" : ""}>{el / 3}</p>
              )
            }
          })}
        </div>
        <div className="addMeter">
          {addArr.map((el, i) => {
            return (
              <div className={`addMeterSection ${el % 3 === 0 ? "boldRight" : ""} ${el <= character.addictionProgress ? "filled" : ""}`} key={`addiction${i}`} />
            )
          })}
        </div>
        <p>Need</p>
        <div className="needContainer">
          {addArr.map((el, i) => {
            let val = el / 3;
            if (el % 3 === 0) {
              return (
                <div key={`need${val}`} className={`${character.need >= val ? "need redFill" : "need"} ${(val - 8) * -1 + 2 <= character.addiction ? "hidden" : ""}`} />
              )
            }
          })}
        </div>
        <p>Myth Uses</p>
        <div className="plusMinus">
          <button type='button' className='diceButton'>
            <input type='image' onClick={minusMyth} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
          </button>
          <button type='button' className='diceButton'>
            <input type='image' onClick={addMyth} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
          </button>
        </div>
        <p>{character.mythUses}</p>
      </div>

      <div className="section wealth">
        <h2>Wealth</h2>
        <div className="plusMinus">
          <button type='button' className='diceButton'>
            <input type='image' onClick={minusWealth} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
          </button>
          <button type='button' className='diceButton'>
            <input type='image' onClick={addWealth} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
          </button>
        </div>
        <div className="wealthGrid">
          <div className="bubbleCol">
            {weaArr.map((el, i) => {
              return (
                <div key={`wealth${i}`} className={el <= character.wealth ? "filled bubble" : "bubble"} />
              )
            })}
          </div>
          <div className="adjCol">
            <p>Destitute</p>
            <p>Poor</p>
            <p>Moderate</p>
            <p>Wealthy</p>
            <p>Exquisite</p>
          </div>
        </div>
      </div>

      <div className="gear section">
        <h2>Gear</h2>
        <div className="gearInputContainer">
          <input type="text" placeholder="Add gear..." onKeyDown={handleGearInput} className="gearInput" id='gearInput' />
          <button type='button' className='diceButton gearButton' id="gearButton">
            <input type='image' onClick={handleGearBtn} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
          </button>
        </div>
        <ul className="gearGrid">
          {character.gear.map((el, i) => {
            return (
              <li key={`gear${i}`} className="gearItem">
                {el}
                <button type="button" className="diceButton trashButton">
                  <input type="image" onClick={removeGearItem} value={el} src="/static/icons/trash-solid.svg" alt="delete gear item" className="filter" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="section details">
        <h2>Character Details</h2>
        <div className="detailsGrid">
          <div>
            <h3>Goals & Motives</h3>
            <textarea value={character.details[0].content} className="detailsInput" name="goals" onChange={detailsChange} />
          </div>
          <div>
            <h3>Personal Morals</h3>
            <textarea value={character.details[1].content} className="detailsInput" name="morals" onChange={detailsChange} />
          </div>
          <div>
            <h3>Flaws & Weaknesses</h3>
            <textarea value={character.details[2].content} className="detailsInput" name="weaknesses" onChange={detailsChange} />
          </div>
          <div>
            <h3>Important Connections</h3>
            <textarea value={character.details[3].content} className="detailsInput" name="connections" onChange={detailsChange} />
          </div>
        </div>
      </div>

      <div className={`dead ${character.dead ? "" : "hidden"}`}>
        <img className="filter deathImg" src="/static/icons/skull-solid.svg" alt="" />
        <p className="deathMessage">{character.deathMsg}</p>
        <button onClick={resurrect} type="button" className="resurrect">Resurrect</button>
        <back-component></back-component>
      </div>

      <div className="warning fadeOut hidden" id="warning">
        <p>{warning}</p>
      </div>
    </div>
  )
}

export default CharacterSheet;