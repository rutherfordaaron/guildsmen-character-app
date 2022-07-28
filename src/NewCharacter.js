import { useState } from "react";

class Character {
  constructor(name, race, stats, wealth, luck, skills, details, guild) {
    this.name = name;
    this.race = race;
    this.stats = stats;
    this.wealth = wealth;
    this.luck = luck;
    this.skills = skills;
    this.details = details;
    this.guild = guild;
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

const defaultSkills = [
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
]

const defaultStats = [
  { name: 'Nimble', modifier: -1 },
  { name: 'Tough', modifier: -1 },
  { name: 'Competence', modifier: -1 },
  { name: 'Constitution', modifier: -1 },
]

const defaultDetails = [
  { name: 'goals', content: '' },
  { name: 'morals', content: '' },
  { name: 'weaknesses', content: '' },
  { name: 'connections', content: '' }
]

let newCharacter = new Character(null, null, defaultStats, null, null, defaultSkills, defaultDetails, null);

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
  let [display, setDisplay] = useState(0);
  let displayArr = [
    /*
    0. Info (name, demeanor, physique)
    1. race
    2. Luck (1 die only!)
    3. details
    4. starting skills
    5. wealth
    6. guild
    7. success!
    */
  ];
  return (
    <div>
      <h1>New Character</h1>
    </div>
  )
}

export default NewCharacter;