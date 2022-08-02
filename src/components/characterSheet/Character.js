const Character = (props) => {
  return (
    <div className="character section">
      <h2>Character</h2>
      <p><strong>Species:</strong> {props.character.race || props.character.species}</p>
      <p><strong>Demeanor:</strong> {props.character.demeanor}</p>
      <p><strong>Physique:</strong> {props.character.physique}</p>
    </div>
  )
}

export default Character;