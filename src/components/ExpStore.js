import { useEffect, useState } from "react"
import Start from "./expStore/Start";
import Skills from "./expStore/Skills";
import Stats from "./expStore/Stats";
import './css/ExpStore.css';

const ExpStore = (props) => {
  let [character, setCharacter] = useState({ ...props.character });
  let [display, setDisplay] = useState('start');
  let [error, setError] = useState("");
  let [specSkill, setSpecSkill] = useState({});
  let [list, setList] = useState(<div />);

  useEffect(() => {
    props.setCharacter(character);
  });

  const selectSkillSpec = (e) => {
    let skill = {};

    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name === e.target.value) {
        skill = { ...character.skills[i] };
      }
    }

    let requiredExp = 5;

    if (skill.spec1) {
      requiredExp = 4;
    }

    if (skill.spec2) {
      setError("You cannot specialize more in this skill.");
      flash();
    } else if (skill.modifier < 2) {
      setError("That skill's level is too low!");
      flash();
    } else if (character.exp < requiredExp) {
      setError("Not enough EXP for that!");
      flash();
    } else {
      setSpecSkill(skill);
      setDisplay("specialSelect");
      getList(skill.name);
    }
  }

  const getList = (name) => {
    switch (name) {
      case ('Craft'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Clay") }}>Clay</button>
            <button type="button" onClick={(e) => { setSpec(name, "Fabric") }}>Fabric</button>
            <button type="button" onClick={(e) => { setSpec(name, "Metal") }}>Metal</button>
            <button type="button" onClick={(e) => { setSpec(name, "Stone") }}>Stone</button>
            <button type="button" onClick={(e) => { setSpec(name, "Wood") }}>Wood</button>
          </div>
        )
        break;
      case ('Investigate'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Awareness") }}>Awareness</button>
            <button type="button" onClick={(e) => { setSpec(name, "Searching") }}>Searching</button>
            <button type="button" onClick={(e) => { setSpec(name, "Situational") }}>Situational</button>
            <button type="button" onClick={(e) => { setSpec(name, "Tracking") }}>Tracking</button>
          </div>
        )
        break;
      case ('Leadership'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Business") }}>Business</button>
            <button type="button" onClick={(e) => { setSpec(name, "Government") }}>Government</button>
            <button type="button" onClick={(e) => { setSpec(name, "Group") }}>Group</button>
          </div>
        )
        break;
      case ('Medic'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Beasts") }}>Beasts</button>
            <button type="button" onClick={(e) => { setSpec(name, "People") }}>People</button>
          </div>
        )
        break;
      case ('Myth'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Refinement") }}>Refinement</button>
            <button type="button" onClick={(e) => { setSpec(name, "Air") }}>Air</button>
            <button type="button" onClick={(e) => { setSpec(name, "Fire") }}>Fire</button>
            <button type="button" onClick={(e) => { setSpec(name, "Lightning") }}>Lightning</button>
            <button type="button" onClick={(e) => { setSpec(name, "Metal") }}>Metal</button>
            <button type="button" onClick={(e) => { setSpec(name, "Stone") }}>Stone</button>
            <button type="button" onClick={(e) => { setSpec(name, "Water") }}>Water</button>
          </div>
        )
        break;
      case ('Nature'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Animals") }}>Animals</button>
            <button type="button" onClick={(e) => { setSpec(name, "Geography") }}>Geography</button>
            <button type="button" onClick={(e) => { setSpec(name, "Plants") }}>Plants</button>
            <button type="button" onClick={(e) => { setSpec(name, "Survival") }}>Survival</button>
          </div>
        )
        break;
      case ('Performance'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Acrobatics") }}>Acrobatics</button>
            <button type="button" onClick={(e) => { setSpec(name, "Acting") }}>Acting</button>
            <button type="button" onClick={(e) => { setSpec(name, "Contortion") }}>Contortion</button>
            <button type="button" onClick={(e) => { setSpec(name, "Music") }}>Music</button>
          </div>
        )
        break;
      case ('Social'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Deception") }}>Deception</button>
            <button type="button" onClick={(e) => { setSpec(name, "Intimidation") }}>Intimidation</button>
            <button type="button" onClick={(e) => { setSpec(name, "Persuasion") }}>Persuasion</button>
          </div>
        )
        break;
      case ('Sneaky'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Hiding") }}>Hiding</button>
            <button type="button" onClick={(e) => { setSpec(name, "Lockpick") }}>Lock-Picking</button>
            <button type="button" onClick={(e) => { setSpec(name, "Pickpocket") }}>Poket-Picking</button>
            <button type="button" onClick={(e) => { setSpec(name, "Sleights") }}>Slight-of-Hand</button>
          </div>
        )
        break;
      case ('Tech'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Biological") }}>Biological Devices</button>
            <button type="button" onClick={(e) => { setSpec(name, "Large") }}>Large Devices</button>
            <button type="button" onClick={(e) => { setSpec(name, "Personal") }}>Personal Devices</button>
            <button type="button" onClick={(e) => { setSpec(name, "Vehicles") }}>Vehicles</button>
          </div>
        )
        break;
      case ('Throwdown'):
        setList(
          <div className="specList">
            <button type="button" onClick={(e) => { setSpec(name, "Melee") }}>Melee</button>
            <button type="button" onClick={(e) => { setSpec(name, "Personal") }}>Personal</button>
            <button type="button" onClick={(e) => { setSpec(name, "Ranged") }}>Ranged</button>
          </div>
        )
        break;
      default:
        console.log("hmmm....");
    }
  }

  const setSpec = (name, spec) => {
    let skill, index;

    for (let i = 0; i < character.skills.length; i++) {
      if (character.skills[i].name === name) {
        skill = { ...character.skills[i] };
        index = i;
      }
    }

    if (skill.spec1 === spec || skill.spec2 === spec) {
      setError('You already have that specialty!');
      flash();
    } else if (skill.spec1 && skill.spec2) {
      setError('You have both specialties already!');
      flash();
    } else {
      setError("Specialty aquired!");
      let newCharacter = { ...character }
      newCharacter.experience = skill.spec1 ? character.experience - 4 : character.experience - 5;
      skill.spec1 ? newCharacter.skills[index].spec2 = spec : newCharacter.skills[index].spec1 = spec;
      setCharacter(newCharacter);
      flash();
    }
  }

  return (
    <div className="expStoreContainer">
      <div className='expStore'>
        <h2>The Experience Store</h2>
        <p className="availableExp"><strong>{character.experience} EXP available</strong></p>
        {display === 'start' ? <Start setDisplay={setDisplay} />
          : display === 'skills' ?
            <Skills
              setError={setError}
              flash={flash}
              character={character}
              setCharacter={setCharacter}
            />
            : display === 'stats' ?
              <Stats
                setError={setError}
                flash={flash}
                character={character}
                setCharacter={setCharacter}
              />
              : display === 'specialty' ?
                <div>
                  <p>What skill would you like to specialize?</p>
                  <div className='skillsGrid'>
                    {props.character.skills.map((el, i) => {
                      return (
                        <button
                          type="button"
                          className="block"
                          value={el.name}
                          onClick={selectSkillSpec}
                          key={`specSkill${i}`}
                        >
                          {el.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
                : display === 'specialSelect' ?
                  <div>
                    <p>What would you like to specialize in for {specSkill.name}?</p>
                    {list}
                  </div>
                  : <p>That didn't go right...</p>}
        <button onClick={props.closeExpStore} className="closeBtn"><img src="/static/icons/xmark-solid.svg" alt="close the experience shop" className="filter" /></button>
        <div className="errorContainer" id="errorContainer">
          <p className="error">{error}</p>
        </div>
      </div>
    </div>
  )
}

const flash = () => {
  const errorContainer = document.getElementById('errorContainer');

  errorContainer.classList.remove('fadeOut');
  setTimeout(() => {
    errorContainer.classList.add('fadeOut');
  }, 100);
}


export default ExpStore;