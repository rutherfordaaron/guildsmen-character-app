import { Link } from 'react-router-dom'
import './App.css';


const App = () => {

  let characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));

  return (
    <div>
      <h1>Your Characters</h1>
      <a className="link createCharacter" href='https://guildsmen-ttrpg/resources/character-creator.html'>
        Create a New Charcter
        <img className="filter" alt='' src='/static/icons/arrow-right-solid.svg' />
      </a>
      {characters.map((el, i) => {
        return (
          <div className="characterBtnContainer">
            <Link
              className="link"
              key={`character${i}`}
              to={el.name}
              value={el.name}
            >
              {el.name}
            </Link>
          </div>
        )
      })}
    </div >
  )
}

export default App;