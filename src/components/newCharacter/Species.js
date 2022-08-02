import { useState } from "react";
import SpeciesInfo from "./components/SpeciesInfo";

const Species = (props) => {
  let [species, setSpecies] = useState("");

  const showSpeciesInfo = (e) => {
    setSpecies(e.target.value);
    document.getElementById("speciesInfo").classList.remove("hidden");
  }

  const setCharacterSpecies = (e) => {
    props.setSpecies(e.target.value);
  }

  return (
    <div>
      <h2>Select Your Species</h2>
      <div className="speciesContent">
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Locess"}
              type="radio"
              name='species'
              value="Locess"
              onClick={setCharacterSpecies}
            />Locess
          </label>
          <button className="infoBtn" value="Locess" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Mausca"}
              type="radio"
              name='species'
              value="Mausca"
              onClick={setCharacterSpecies}
            />Mausca
          </label>
          <button className="infoBtn" value="Mausca" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Mausca Info" />
          </button>
        </div>
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Orc"}
              type="radio"
              name='species'
              value="Orc"
              onClick={setCharacterSpecies}
            />Orc
          </label>
          <button className="infoBtn" value="Orc" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Orc Info" />
          </button>
        </div>
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Matari"}
              type="radio"
              name='species'
              value="Matari"
              onClick={setCharacterSpecies}
            />Matari
          </label>
          <button className="infoBtn" value="Matari" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Sentari Info" />
          </button>
        </div>
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Slated"}
              type="radio"
              name='species'
              value="Slated"
              onClick={setCharacterSpecies}
            />Slated
          </label>
          <button className="infoBtn" value="Slated" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Slated Info" />
          </button>
        </div>
        <div className="speciesInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.species === "Ungal"}
              type="radio"
              name='species'
              value="Ungal"
              onClick={setCharacterSpecies}
            />Ungal
          </label>
          <button className="infoBtn" value="Ungal" onClick={showSpeciesInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Ungal Info" />
          </button>
        </div>
      </div>

      <SpeciesInfo species={species} />

      <div className="warning fadeOut hidden" id="warning">
        <p className="center">You must select a species before moving on!</p>
      </div>
    </div>
  )
}

export default Species;