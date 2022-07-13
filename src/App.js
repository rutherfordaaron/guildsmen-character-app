import { useEffect, useState } from "react";
import './App.css';

let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));

const App = () => {
  let [character, setCharacter] = useState({});
  let [showSheet, setShowSheet] = useState(false);

  const displayCharacter = (e) => {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].name == e.target.value) {
        setCharacter(characters[i]);
      }
    }
  }

  return (
    <div>
      <h1>Your Characters</h1>
      <a></a>
      {characters.map((el, i) => {
        return (
          <div className="characterBtnContainer">
            <button
              className="characterBtn"
              type='button'
              key={i}
              onClick={displayCharacter}
              value={el.name}
            >{el.name}</button>
          </div>
        )
      })}
    </div >
  )
}

export default App;