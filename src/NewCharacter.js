import { useState } from "react";
// CSS imports
import './components/css/CharacterList.css';
import "./components/css/NewCharacter.css";
// component imports
import Info from "./components/newCharacter/Info";
import Race from "./components/newCharacter/Race";
import Luck from "./components/newCharacter/Luck";
import Details from "./components/newCharacter/Details";
import StartingSkills from "./components/newCharacter/StartingSkills";
import Wealth from "./components/newCharacter/Wealth";
import Guild from "./components/newCharacter/Guild";
import Complete from "./components/newCharacter/Complete";

class Character {
  constructor() {
    this.name = undefined;
    this.race = undefined;
    this.stats = [
      { name: 'Nimble', modifier: -1 },
      { name: 'Tough', modifier: -1 },
      { name: 'Competence', modifier: -1 },
      { name: 'Constitution', modifier: -1 },
    ];
    this.wealth = undefined;
    this.luck = undefined;
    this.skills = [
      { name: 'Craft', modifier: -1, spec1: null, spec2: null },
      { name: 'Investigate', modifier: -1, spec1: null, spec2: null },
      { name: 'Leadership', modifier: -1, spec1: null, spec2: null },
      { name: 'Medic', modifier: -1, spec1: null, spec2: null },
      { name: 'Myth', modifier: -1, spec1: null, spec2: null },
      { name: 'Nature', modifier: -1, spec1: null, spec2: null },
      { name: 'Performance', modifier: -1, spec1: null, spec2: null },
      { name: 'Social', modifier: -1, spec1: null, spec2: null },
      { name: 'Sneaky', modifier: -1, spec1: null, spec2: null },
      { name: 'Tech', modifier: -1, spec1: null, spec2: null },
      { name: 'Throwdown', modifier: -1, spec1: null, spec2: null }
    ];
    this.details = [
      { name: 'goals', content: '' },
      { name: 'morals', content: '' },
      { name: 'weaknesses', content: '' },
      { name: 'connections', content: '' }
    ];
    this.guild = undefined;
    this.harm = 0;
    this.dying = false;
    this.addiction = 0;
    this.addictionProgress = 0;
    this.experience = 0;
    this.experienceProgress = 0;
    this.gear = [];
    this.mythUses = 0;
    this.dead = false;
    this.deathMsg = "You died...";
    this.everAddicted = false;
    this.need = 0;
  }
}

let newCharacter = new Character();

let characters;

if (localStorage.getItem('guildsmenCharacters') === null) {
  characters = [];
} else {
  characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));
}

const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const NewCharacter = (props) => {
  let [character, setCharacter] = useState(newCharacter);
  let [display, setDisplay] = useState(1);
  let displayArr = [
    <Info character={character} setCharacter={setCharacter} />,
    <Race character={character} setCharacter={setCharacter} />,
    <Luck character={character} setCharacter={setCharacter} />,
    <Details character={character} setCharacter={setCharacter} />,
    <StartingSkills character={character} setCharacter={setCharacter} />,
    <Wealth character={character} setCharacter={setCharacter} />,
    <Guild character={character} setCharacter={setCharacter} />,
    <Complete character={character} setCharacter={setCharacter} />
  ];

  const nextPrev = (e) => {
    let increment;
    if (e.target.id === "prev") {
      increment = -1;
    } else {
      increment = 1;
    }

    let index = display + increment;
    index < 0 ? index = 0
      : index > displayArr.length - 1 ? index = displayArr.length - 1
        : index = display + increment;

    console.log(index);
    setDisplay(index);
  }

  return (
    <div>
      <h1>New Character Creator</h1>
      {displayArr[display]}
      <div className="nextPrevBtns">
        <button type="button" onClick={nextPrev} id="prev">
          <img src="/static/icons/arrow-left-solid.svg" alt="" className="filter" />Prev
        </button>
        <button type="button" onClick={nextPrev} id="next">
          Next<img src="/static/icons/arrow-right-solid.svg" alt="" className="filter" />
        </button>
      </div>
    </div>
  )
}

export default NewCharacter;