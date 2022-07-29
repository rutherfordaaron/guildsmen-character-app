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

class GuildsmenCharacter {
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
  let [info, setInfo] = useState({ name: undefined, demeanor: undefined, physique: undefined });
  let [race, setRace] = useState(undefined);
  let [luck, setLuck] = useState(undefined);
  let [details, setDetails] = useState([
    { name: 'goals', content: '' },
    { name: 'morals', content: '' },
    { name: 'weaknesses', content: '' },
    { name: 'connections', content: '' }
  ]);
  let [skills, setSkills] = useState([]);
  let [wealth, setWealth] = useState(undefined);
  let [guild, setGuild] = useState(undefined);

  let [navBtnState, setNavBtnState] = useState("")
  let [display, setDisplay] = useState(0);
  let displayArr = [
    <Info setInfo={setInfo} />,
    <Race setRace={setRace} />,
    <Luck setLuck={setLuck} />,
    <Details setDetails={setDetails} />,
    <StartingSkills setSkills={setSkills} />,
    <Wealth setWealth={setWealth} />,
    <Guild setGuild={setGuild} />,
    <Complete />
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

    if (index === displayArr.length - 2) {
      document.getElementById("next").innerHTML = "Submit"
    } else {
      document.getElementById("next").innerHTML = 'Next<img src="/static/icons/arrow-right-solid.svg" alt="" class="filter" />'
    }
    if (index === displayArr.length - 1) {
      setNavBtnState("hidden");
    }
    setDisplay(index);
  }

  return (
    <div>
      <h1>New Character Creator</h1>
      {displayArr[display]}
      <div className={`nextPrevBtns ${navBtnState}`}>
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