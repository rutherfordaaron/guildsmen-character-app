import ExpStore from "../ExpStore";

const Experience = (props) => {
  /**
   * Show the experience store by mounting the ExpStore component
   */
  const startExpStore = () => {
    props.setExpStore(
      <ExpStore
        closeExpStore={closeExpStore}
        character={props.character}
        setCharacter={props.setCharacter}
      />
    );
  }

  /**
   * Hide the experience store by unmounting the ExpStore component
   */
  const closeExpStore = () => {
    props.setExpStore(<div />);
  }


  return (
    <div className="section experience">
      <h2>Experience</h2>
      {/* Container for experience progress bubbles */}
      <div className="bubbleContainer">
        <div className={props.character.experienceProgress >= 1 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 2 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 3 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 4 ? "filled bubble" : "bubble"} />
      </div>
      {/* Container for experience points */}
      <div className="experiencePoints">
        <p><strong>{props.character.experience}</strong></p>
      </div>
      {/* Button to show ExpStore */}
      <button type="button" onClick={startExpStore} className="expBtn">Spend EXP</button>
      {props.expStore}
    </div>
  )
}

export default Experience;