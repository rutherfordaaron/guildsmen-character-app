const Addiction = (props) => {
  const addArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const addMyth = () => {
    let newCharacter = { ...props.character };
    if (!newCharacter.everAddicted) {
      newCharacter.addiction = 1;
      newCharacter.addictionProgress = 3;
      newCharacter.everAddicted = true;
    }

    if (newCharacter.mythUses >= 6) {
      newCharacter.harm = 10;
      newCharacter.dying = true;
      newCharacter.dead = true;
      newCharacter.deathMsg = "You died from an overdose of Myth..";
    } else {
      newCharacter.mythUses++;
      newCharacter.need = 0;
      newCharacter.addictionProgress++;
      newCharacter.addiction = Math.floor(newCharacter.addictionProgress / 3);
    }
    props.setCharacter(newCharacter);
  }

  const minusMyth = () => {
    let newCharacter = { ...props.character };
    if (newCharacter.mythUses > 0) {
      newCharacter.mythUses--;
    }
    props.setCharacter(newCharacter);
  }

  return (
    <div className="section addiction">
      <h2>Myth Addiction</h2>
      <p>Level</p>
      <div className="addLevel">
        <p>0</p>
        {addArr.map((el, i) => {
          if (el % 3 === 0) {
            return (
              <p key={`addLevel${el / 3}`} className={props.character.addiction >= el / 3 ? "levelBold" : ""}>{el / 3}</p>
            )
          }
        })}
      </div>
      <div className="addMeter">
        {addArr.map((el, i) => {
          return (
            <div
              className={`addMeterSection ${el % 3 === 0 ? "boldRight" : ""} ${el <= props.character.addictionProgress ? "filled" : ""}`}
              key={`addiction${i}`}
            />
          )
        })}
      </div>
      <p>Need</p>
      <div className="needContainer">
        {addArr.map((el, i) => {
          let val = el / 3;
          if (el % 3 === 0) {
            return (
              <div
                key={`need${val}`}
                className={`${props.character.need >= val ? "need redFill" : "need"} ${(val - 8) * -1 + 2 <= props.character.addiction ? "hidden" : ""}`}
              />
            )
          }
        })}
      </div>
      <p>Myth Uses</p>
      <div className="plusMinus">
        <button type='button' className='diceButton'>
          <input type='image' onClick={minusMyth} src='/static/icons/circle-minus-solid.svg' alt='subtract harm' className='filter' />
        </button>
        <button type='button' className='diceButton'>
          <input type='image' onClick={addMyth} src='/static/icons/circle-plus-solid.svg' alt='add harm' className='filter' />
        </button>
      </div>
      <p>{props.character.mythUses}</p>
    </div>
  )
}

export default Addiction;