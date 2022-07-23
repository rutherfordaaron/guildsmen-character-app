import { useEffect, useState } from "react"
import Start from "./expStore/Start";
import Skills from "./expStore/Skills";
import Stats from "./expStore/Stats";
import Specialty from "./expStore/Specialty";
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
                <Specialty
                  setList={setList}
                  setError={setError}
                  flash={flash}
                  character={character}
                  setCharacter={setCharacter}
                  setSpecSkill={setSpecSkill}
                  setDisplay={setDisplay}
                />
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