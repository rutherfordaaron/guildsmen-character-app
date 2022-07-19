const Wealth = (props) => {
  const weaArr = [1, 2, 3, 4, 5];

  const minusWealth = () => {
    let newCharacter = { ...props.character };
    if (newCharacter.wealth > 1) {
      newCharacter.wealth--;
    }
    props.setCharacter(newCharacter);
  }

  const addWealth = () => {
    let newCharacter = { ...props.character };
    if (newCharacter.wealth < 5) {
      newCharacter.wealth++;
    }
    props.setCharacter(newCharacter);
  }

  return (
    <div className="section wealth">
      <h2>Wealth</h2>
      <div className="plusMinus">
        <button type='button' className='diceButton'>
          <input type='image' onClick={minusWealth} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
        </button>
        <button type='button' className='diceButton'>
          <input type='image' onClick={addWealth} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
        </button>
      </div>
      <div className="wealthGrid">
        <div className="bubbleCol">
          {weaArr.map((el, i) => {
            return (
              <div key={`wealth${i}`} className={el <= props.character.wealth ? "filled bubble" : "bubble"} />
            )
          })}
        </div>
        <div className="adjCol">
          <p>Destitute</p>
          <p>Poor</p>
          <p>Moderate</p>
          <p>Wealthy</p>
          <p>Exquisite</p>
        </div>
      </div>
    </div>
  )
}

export default Wealth;