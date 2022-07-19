import { useState, useEffect } from "react";
import './css/App.css';
// ChSheet components
import Dice from './Dice';
import Character from "./characterSheet/Character";
import Stats from "./characterSheet/Stats";
import Luck from "./characterSheet/Luck";
import Harm from "./characterSheet/Harm";
import Experience from "./characterSheet/Experience";
import Skills from "./characterSheet/Skills";
import Addiction from "./characterSheet/Addiction";
import Wealth from "./characterSheet/Wealth";
import Gear from "./characterSheet/Gear";
import Details from "./characterSheet/Details";

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

      <Character character={character} />

      <Stats
        character={character}
        rollDice={rollDice}
        setMessage={setMessage}
      />

      <Luck
        rollDice={rollDice}
        character={character}
        setMessage={setMessage}
      />

      <div className="harmExpContainer">
        <Harm character={character} setCharacter={setCharacter} />

        <Experience
          character={character}
          setCharacter={setCharacter}
          expStore={expStore}
          setExpStore={setExpStore}
        />
      </div>

      <Skills
        character={character}
        setCharacter={setCharacter}
        setMessage={setMessage}
        rollDice={rollDice}
        setDiceState={setDiceState}
      />

      <Addiction character={character} setCharacter={setCharacter} />

      <Wealth character={character} setCharacter={setCharacter} />

      <Gear character={character} setCharacter={setCharacter} />

      <Details character={character} setCharacter={setCharacter} />

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