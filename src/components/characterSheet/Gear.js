const Gear = (props) => {
  /**
   * See if e was an ENTER keyboard press
   * If so, push the input value to the gear array
   * Reset input value
   * @param {DOM Event} e 
   */
  const handleGearInput = (e) => {
    console.log('gear input');
    if (e.which === 13 || e.target.id === 'gearButtn') {
      let newCharacter = { ...props.character };
      newCharacter.gear.push(e.target.value);

      e.target.value = "";
      props.setCharacter(newCharacter);
    }
  }

  /**
   * Push value of the gearInput input to the gear array
   * Reset the value of the gearInput input
   */
  const handleGearBtn = () => {
    let newCharacter = { ...props.character };
    newCharacter.gear.push(document.getElementById('gearInput').value);
    document.getElementById('gearInput').value = "";
    props.setCharacter(newCharacter);
  }

  /**
   * Get the index of the gear item in the gear array
   * Set the gear array to an array that filters out all items that match the item at that index
   * --- CAUSES ITEMS OF THE EXACT SAME NAME TO BE REMOVED, CAN CAUSE MULTIPLE DELETION AT ONCE ---
   * @param {DOM event} e 
   */
  const removeGearItem = (e) => {
    let newCharacter = { ...props.character };
    let index = newCharacter.gear.indexOf(e.target.value);
    newCharacter.gear = newCharacter.gear.filter(item => item !== newCharacter.gear[index]);

    props.setCharacter(newCharacter);
  }

  return (
    <div className="gear section">
      <h2>Gear</h2>
      {/* Gear input for submiting new gear items, with an add button for mobile users */}
      <div className="gearInputContainer">
        <input type="text" placeholder="Add gear..." onKeyDown={handleGearInput} className="gearInput" id='gearInput' />
        <button type='button' className='diceButton gearButton' id="gearButton">
          <input type='image' onClick={handleGearBtn} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
        </button>
      </div>
      <ul className="gearGrid">
        {/* Map through the gear array and display them as unordered list items */}
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