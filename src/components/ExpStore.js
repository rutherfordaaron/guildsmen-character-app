import { useEffect, useState } from "react"
import Start from "./expStore/Start";
import Skills from "./expStore/Skills";
import Stats from "./expStore/Stats";
import Specialty from "./expStore/Specialty";
import './css/ExpStore.css';

const ExpStore = (props) => {
  // State for the expStore
  let [character, setCharacter] = useState({ ...props.character });
  let [display, setDisplay] = useState('start');
  let [error, setError] = useState("");
  let [specSkill, setSpecSkill] = useState({});
  let [list, setList] = useState(<div />);

  // Set character changes any time the state updates
  useEffect(() => {
    props.setCharacter(character);
  });

  return (
    <div className="expStoreContainer">
      <div className='expStore'>
        <h2>The Experience Store</h2>
        <p className="availableExp"><strong>{character.experience} EXP available</strong></p>
        {/* Ternary expressions to determine what page to display based on display state variable */}
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

/**
 * Function to show the error message, then remove it so it doesn't block any buttons, and make it fade out
*/
const flash = () => {
  const errorContainer = document.getElementById('errorContainer');

  errorContainer.classList.remove('fadeOut');
  setTimeout(() => {
    errorContainer.classList.add('fadeOut');
  }, 100);
}


export default ExpStore;