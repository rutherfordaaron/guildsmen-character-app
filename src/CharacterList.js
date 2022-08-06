import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './components/css/CharacterList.css';


const CharacterList = () => {
  let [itemToDelete, setItemToDelete] = useState('');
  let [characters, setCharacters] = useState(JSON.parse(localStorage.getItem('guildsmenCharacters')));

  useEffect(() => {
    localStorage.setItem('guildsmenCharacters', JSON.stringify(characters));
    document.getElementById("backToContents").classList.remove("hidden");
  })

  const confirmDelete = (e) => {
    setItemToDelete(e.target.value);
    document.getElementById('confirm').classList.remove("hidden");
  }

  const removeItem = () => {
    let index;
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].name === itemToDelete) {
        index = i;
      }
    }
    document.getElementById('confirm').classList.add("hidden");
    setCharacters(characters.filter(item => item !== characters[index]));
  }

  return (
    <div className="app">
      <h1>Your Characters</h1>
      <Link
        className="link createCharacter"
        to="new-character"
        onClick={() => document.getElementById("backToContents").classList.add("hidden")}
      >
        Create a New Charcter
        <img className="filter" alt='' src='/static/icons/arrow-right-solid.svg' />
      </Link>
      {characters?.map((el, i) => {
        return (
          <div key={`character${i}`} className="characterBtnContainer">
            <Link
              className="link"
              to={el.name}
              value={el.name}
            >
              {el.name}
            </Link>
            <button type="button" className="diceButton trashButton">
              <input type="image" value={el.name} onClick={confirmDelete} src="/static/icons/trash-solid.svg" alt="delete character" className="filter" />
            </button>
          </div>
        )
      })}
      <div className='confirm hidden' id="confirm">
        <p>Are you sure?</p>
        <div>
          <button type="button" onClick={removeItem}>Yes</button>
          <button type="button" onClick={() => document.getElementById('confirm').classList.add('hidden')}>No</button>
        </div>
      </div>
    </div >
  )
}

export default CharacterList;