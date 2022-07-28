const Luck = (props) => {
  /**
   * Get 2 random numbers (1-6) by calling rollDice()
   * Store the modifier of luck and Name
   * Initialize a variable to hold a string for positive modifiers
   * If the modifier is positive, make modifier a string an append a +
   * Set the dice roll message to reflect that luck is being rolled, the numbers rolled, luck modifier, and total number
   */
  const luckCheck = () => {
    let rolls = props.rollDice();
    let modifier = Number(props.character.luck);
    let modifierString;
    let name = 'Luck';

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
  }

  return (
    <div className="section luck">
      <h2>Luck</h2>
      <div className="stat">
        {/* Container for stat modifiers. Empty <div> to push numbers right to hover over the bubbles properly */}
        <div></div>
        <div className="statModifiers">
          <p>-3</p>
          <p>-2</p>
          <p>-1</p>
          <p>+1</p>
          <p>+2</p>
          <p>+3</p>
        </div>
      </div>
      <div className="stat">
        <div className='labelContainer'>
          {/* Button that causes the does the luck check and the roll animation */}
          <button type='button' value={props.character.luck} className='diceButton'>
            <input
              type='image'
              value={props.character.luck}
              onClick={luckCheck}
              src='/static/icons/dice-solid.svg'
              alt={`roll for Luck`}
              className='filter'
            />
          </button>
        </div>
        {/* container for the bubbles. They are filled depending on the character's value of luck */}
        <div className="bubbleContainer">
          <div className="bubble filled" />
          <div className={props.character.luck >= -2 ? 'filled bubble' : 'bubble'} />
          <div className={props.character.luck >= -1 ? 'filled bubble' : 'bubble'} />
          <div className={props.character.luck >= 1 ? 'filled bubble' : 'bubble'} />
          <div className={props.character.luck >= 2 ? 'filled bubble' : 'bubble'} />
          <div className={props.character.luck >= 3 ? 'filled bubble' : 'bubble'} />
        </div>
      </div>
    </div>
  )
}

export default Luck;