const Details = (props) => {
  const detailsChange = (e) => {
    let newCharacter = { ...props.character };
    for (let i = 0; i < newCharacter.details.length; i++) {
      if (newCharacter.details[i].name === e.target.name) {
        newCharacter.details[index].content = e.target.value;
      }
    }

    props.setCharacter(newCharacter);
  }

  return (
    <div className="section details">
      <h2>Character Details</h2>
      <div className="detailsGrid">
        <div>
          <h3>Goals & Motives</h3>
          <textarea value={props.character.details[0].content} className="detailsInput" name="goals" onChange={detailsChange} />
        </div>
        <div>
          <h3>Personal Morals</h3>
          <textarea value={props.character.details[1].content} className="detailsInput" name="morals" onChange={detailsChange} />
        </div>
        <div>
          <h3>Flaws & Weaknesses</h3>
          <textarea value={props.character.details[2].content} className="detailsInput" name="weaknesses" onChange={detailsChange} />
        </div>
        <div>
          <h3>Important Connections</h3>
          <textarea value={props.character.details[3].content} className="detailsInput" name="connections" onChange={detailsChange} />
        </div>
      </div>
    </div>
  )
}

export default Details;