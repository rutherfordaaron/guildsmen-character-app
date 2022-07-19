const Stats = (props) => {
  const statCheck = (e) => {
    let stat = {};
    for (let i = 0; i < props.character.stats.length; i++) {
      if (props.character.stats[i].name === e) {
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