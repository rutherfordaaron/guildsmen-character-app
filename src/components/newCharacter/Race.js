import { useState } from "react";
import RaceInfo from "./components/RaceInfo";

const Race = (props) => {
  let [race, setRace] = useState("");

  const showRaceInfo = (e) => {
    setRace(e.target.value);
    document.getElementById("raceInfo").classList.remove("hidden");
  }

  const setCharacterRace = (e) => {
    props.setRace(e.target.value);
  }

  return (
    <div>
      <h2>Select Your Race</h2>
      <div className="raceContent">
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Locess"}
              type="radio"
              name='race'
              value="Locess"
              onClick={setCharacterRace}
            />Locess
          </label>
          <button className="infoBtn" value="Locess" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Mausca"}
              type="radio"
              name='race'
              value="Mausca"
              onClick={setCharacterRace}
            />Mausca
          </label>
          <button className="infoBtn" value="Mausca" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Mausca Info" />
          </button>
        </div>
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Orc"}
              type="radio"
              name='race'
              value="Orc"
              onClick={setCharacterRace}
            />Orc
          </label>
          <button className="infoBtn" value="Orc" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Orc Info" />
          </button>
        </div>
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Sentari"}
              type="radio"
              name='race'
              value="Sentari"
              onClick={setCharacterRace}
            />Sentari
          </label>
          <button className="infoBtn" value="Sentari" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Sentari Info" />
          </button>
        </div>
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Slated"}
              type="radio"
              name='race'
              value="Slated"
              onClick={setCharacterRace}
            />Slated
          </label>
          <button className="infoBtn" value="Slated" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Slated Info" />
          </button>
        </div>
        <div className="raceInputContainer">
          <label className='raceInput'>
            <input
              checked={props.race === "Ungal"}
              type="radio"
              name='race'
              value="Ungal"
              onClick={setCharacterRace}
            />Ungal
          </label>
          <button className="infoBtn" value="Ungal" onClick={showRaceInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Ungal Info" />
          </button>
        </div>
      </div>

      <RaceInfo race={race} />

      <div className="warning fadeOut hidden" id="warning">
        <p className="center">You must select a race before moving on!</p>
      </div>
    </div>
  )
}

export default Race;