import ExpStore from "../ExpStore";

const Experience = (props) => {
  const startExpStore = () => {
    props.setExpStore(
      <ExpStore
        closeExpStore={closeExpStore}
        character={props.character}
        setCharacter={props.setCharacter}
      />
    );
  }

  const closeExpStore = () => {
    props.setExpStore(<div />);
  }


  return (
    <div className="section experience">
      <h2>Experience</h2>
      <div className="bubbleContainer">
        <div className={props.character.experienceProgress >= 1 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 2 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 3 ? "filled bubble" : "bubble"} />
        <div className={props.character.experienceProgress >= 4 ? "filled bubble" : "bubble"} />
      </div>
      <div className="experiencePoints">
        <p><strong>{props.character.experience}</strong></p>
      </div>
      <button type="button" onClick={startExpStore} className="expBtn">Spend EXP</button>
      {props.expStore}
    </div>
  )
}

export default Experience;