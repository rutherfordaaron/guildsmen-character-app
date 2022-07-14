import { useState, useEffect } from "react";
import './App.css';

const CharacterSheet = (props) => {
  let [character, setCharacter] = useState(props.character);
  let characterList = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  let index = props.index;

  useEffect(() => {
    characterList[index] = character;
    localStorage.setItem('guildsmenCharacters', JSON.stringify(characterList));
  });

  return (
    <div>
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
          let modifier = el.modifier + 1;

          return (
            <div key={`stat${i}`} className='stat'>
              <div className="labelContainer">
                <button type='button'>
                  <img src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                </button>
                <p>{el.name}:</p>
              </div>
              <div className="bubbleContainer">
                <div className="bubble filled"></div>
                <div className="bubble"></div>
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