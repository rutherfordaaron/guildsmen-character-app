const Gear = (props) => {
  const handleGearInput = (e) => {
    console.log('gear input');
    if (e.which === 13 || e.target.id === 'gearButtn') {
      let newCharacter = { ...props.character };
      newCharacter.gear.push(e.target.value);

      e.target.value = "";
      props.setCharacter(newCharacter);
    }
  }

  const handleGearBtn = () => {
    let newCharacter = { ...props.character };
    newCharacter.gear.push(document.getElementById('gearInput').value);
    document.getElementById('gearInput').value = "";
    props.setCharacter(newCharacter);
  }

  const removeGearItem = (e) => {
    let newCharacter = { ...props.character };
    let index = newCharacter.gear.indexOf(e.target.value);
    newCharacter.gear = newCharacter.gear.filter(item => item !== newCharacter.gear[index]);

    props.setCharacter(newCharacter);
  }

  return (
    <div className="gear section">
      <h2>Gear</h2>
      <div className="gearInputContainer">
        <input type="text" placeholder="Add gear..." onKeyDown={handleGearInput} className="gearInput" id='gearInput' />
        <button type='button' className='diceButton gearButton' id="gearButton">
          <input type='image' onClick={handleGearBtn} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
        </button>
      </div>
      <ul className="gearGrid">
        {props.character.gear.map((el, i) => {
          return (
            <li key={`gear${i}`} className="gearItem">
              {el}
              <button type="button" className="diceButton trashButton">
                <input type="image" onClick={removeGearItem} value={el} src="/static/icons/trash-solid.svg" alt="delete gear item" className="filter" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Gear;