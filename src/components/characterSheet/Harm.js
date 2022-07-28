const Harm = (props) => {
  /**
   * If character harm is >=10, the character dies and death message is set/displayed
   * Otherwise, increment harm
   */
  const addHarm = () => {
    let newCharacter = { ...props.character };
    newCharacter.harm >= 10 ? newCharacter.harm = 10 : newCharacter.harm++;
    if (newCharacter.harm >= 10) {
      newCharacter.deathMsg = "You died...";
      newCharacter.dead = true;
    }

    props.setCharacter(newCharacter);
  }

  /**
   * Decrement harm without allowing it to drop below 0
   */
  const minusHarm = () => {
    let newCharacter = { ...props.character };
    newCharacter.harm <= 0 ? newCharacter.harm = 0 : newCharacter.harm--;

    props.setCharacter(newCharacter);
  }

  /**
   * Toggles dying by setting dying to whatever dying is not
   */
  const toggleDying = () => {
    let newCharacter = { ...props.character };
    newCharacter.dying = !newCharacter.dying;
    props.setCharacter(newCharacter);
  }

  return (
    <div className='section harm'>
      <h2>Harm</h2>
      {/* Buttons for incrementing and decrementing harm */}
      <div className="plusMinus">
        <button type='button' className='diceButton'>
          <input type='image' onClick={minusHarm} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
        </button>
        <button type='button' className='diceButton'>
          <input type='image' onClick={addHarm} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
        </button>
      </div>
      {/* Container to hold Harm bubbles. Bubbles are filled in depending on character Harm */}
      <div>
        <div className='bubbleContainer'>
          <div className={props.character.harm >= 1 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 2 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 3 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 4 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 5 ? 'redFill bubble' : 'bubble'}></div>
        </div>
        <div className='bubbleContainer'>
          <div className={props.character.harm >= 6 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 7 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 8 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 9 ? 'redFill bubble' : 'bubble'}></div>
          <div className={props.character.harm >= 10 ? 'redFill bubble' : 'bubble'}></div>
        </div>
      </div>
      {/* Dying indicator. Toggled by clicked the label or the bubble */}
      <div className="dying">
        <p onClick={toggleDying}>Dying</p>
        <div className={`bubble ${props.character.dying ? "redFill" : ""}`} onClick={toggleDying} />
      </div>
    </div>
  )
}

export default Harm;