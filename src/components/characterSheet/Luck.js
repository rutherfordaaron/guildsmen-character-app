const Luck = (props) => {
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