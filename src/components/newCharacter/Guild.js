import { useState } from "react";
import GuildInfo from "./components/GuildInfo";
import "./components/SpeciesInfo.css";

const Guild = (props) => {
  let [guild, setGuild] = useState("");

  const showGuildInfo = (e) => {
    setGuild(e.target.value);
    document.getElementById("guildInfo").classList.remove("hidden");
  }

  const setCharacterSpecies = (e) => {
    props.setGuild(e.target.value);
  }

  return (
    <div>
      <h2>Finally, Join a Guild</h2>

      <p>You now need to decide where your character is going. You and everyone else in your party are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are five common guilds, each will train your players in a specific set of skills.</p>

      <p>Once you choose a guild, all players will increase the skills listed to +1 if those skills are not already there.</p>

      <div className="speciesContent">
        <div className="speciesInputContainer guildInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.guild === "Assassins"}
              type="radio"
              name='guild'
              value="Assassins"
              onClick={setCharacterSpecies}
            />Assassins
          </label>
          <button className="infoBtn" value="Assassins" onClick={showGuildInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>

        <div className="speciesInputContainer guildInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.guild === "Mythic Hunters"}
              type="radio"
              name='guild'
              value="Mythic Hunters"
              onClick={setCharacterSpecies}
            />Mythic Hunters
          </label>
          <button className="infoBtn" value="Mythic Hunters" onClick={showGuildInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>

        <div className="speciesInputContainer guildInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.guild === "Explorers"}
              type="radio"
              name='guild'
              value="Explorers"
              onClick={setCharacterSpecies}
            />Explorers
          </label>
          <button className="infoBtn" value="Explorers" onClick={showGuildInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>

        <div className="speciesInputContainer guildInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.guild === "Mercenaries"}
              type="radio"
              name='guild'
              value="Mercenaries"
              onClick={setCharacterSpecies}
            />Mercenaries
          </label>
          <button className="infoBtn" value="Mercenaries" onClick={showGuildInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>

        <div className="speciesInputContainer guildInputContainer">
          <label className='speciesInput'>
            <input
              checked={props.guild === "Thieves"}
              type="radio"
              name='guild'
              value="Thieves"
              onClick={setCharacterSpecies}
            />Thieves
          </label>
          <button className="infoBtn" value="Thieves" onClick={showGuildInfo}>
            <img src="/static/icons/circle-exclamation-solid.svg" className="filter" alt="Locess Info" />
          </button>
        </div>
      </div>

      <GuildInfo guild={guild} />

      <div className="warning fadeOut hidden" id="warning">
        <p className="center">You must join a guild moving on!</p>
      </div>
    </div>
  )
}

export default Guild;