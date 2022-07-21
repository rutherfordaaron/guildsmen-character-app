const Stats = (props) => {
  /**
   * Determine stat to act with by comparing all character stats' names to given stat name
   * Once found, store that stat object for easier reference
   * Get 2 random numbers (1-6) via rollDice()
   * store the modifier of the stat, the name and the total of the roll (random numbers + modifier)
   * initialize variable to store modifier string if modifier is >-1
   * If modifier is -1, append + to modifier as a string
   * If total is >= 8, increment experience progress
   * * and if experience progress is now >= 4, increment experience and set experience progress to 0
   * otherwise (total < 8), do nothing.
   * Set result message to show stat name, random numbers rolled, modifier, and total
   * @param {name of stat to roll} name
   * @returns total number form 2 random numbers (1-6) and the stat modifier
   */
  const statCheck = (name) => {
    let stat = {};
    for (let i = 0; i < props.character.stats.length; i++) {
      if (props.character.stats[i].name === name) {
        stat = props.character.stats[i];
      }
    }

    let rolls = props.rollDice();
    let modifier = stat.modifier;
    let modifierString;
    let name = stat.name;

    if (modifier > -1) {
      modifierString = `+${modifier}`;
    }

    props.setMessage(
      <div className='message'>
        <p className="messageHead"><strong>{name} Check!</strong></p>
        <p>You rolled {rolls.num1} and {rolls.num2}.</p>
        <p>Your modifier is {modifierString || modifier}</p>
        <p className="messageTotal"><strong>Total: {rolls.num1 + rolls.num2 + modifier}</strong></p>
      </div>
    )

    return (rolls.num1 + rolls.num2 + modifier)
  }

  return (
    <div className="section stats">
      <h2>Stats</h2>
      <div className="stat">
        <div></div>
        <div className="statModifiers">
          <p>-1</p>
          <p>0</p>
          <p>+1</p>
          <p>+2</p>
          <p>+3</p>
        </div>
      </div>
      {/* Map over character skills and create stat containers using that information */}
      {props.character.stats.map((el, i) => {
        return (
          <div key={`stat${i}`} className='stat'>
            <div className="labelContainer">
              <button type='button' value={el.name} className='diceButton'>
                <input type='image' value={el.name} onClick={() => { statCheck(el.name) }} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
              </button>
              <p>{el.name}:</p>
            </div>
            <div className="bubbleContainer">
              <div className='bubble filled'></div>
              <div className={el.modifier >= 0 ? 'bubble filled' : "bubble"}></div>
              <div className={el.modifier >= 1 ? 'bubble filled' : "bubble"}></div>
              <div className={el.modifier >= 2 ? 'bubble filled' : "bubble"}></div>
              <div className={el.modifier >= 3 ? 'bubble filled' : "bubble"}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stats