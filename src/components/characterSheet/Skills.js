const Skills = (props) => {
  const skillCheck = (e) => {
    let skill = {};
    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === e) {
        skill = props.character.skills[i];
      }
    }

    let rolls = props.rollDice();
    let modifier = skill.modifier;
    let modifierString;
    let name = skill.name;
    let total = rolls.num1 + rolls.num2 + modifier;

    if (modifier > -1) {
      modifierString = `+${modifier}`;
    }

    if (total >= 8) {
      let newCharacter = { ...props.character };
      newCharacter.experienceProgress++;

      if (newCharacter.experienceProgress >= 4) {
        newCharacter.experience++;
        newCharacter.experienceProgress = 0;
      }

      props.setCharacter(newCharacter);
    }

    props.setMessage(
      <div className='message'>
        <p className="messageHead"><strong>{name} Check!</strong></p>
        <p>You rolled {rolls.num1} and {rolls.num2}.</p>
        <p>Your modifier is {modifierString || modifier}</p>
        <p className="messageTotal"><strong>Total: {total}</strong></p>
      </div>
    )

    return (rolls.num1 + rolls.num2 + modifier)
  }

  const primaryCheck = (e) => {
    let skill = {};
    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === e.target.value) {
        skill = props.character.skills[i];
      }
    }

    if (!skill.spec1) {
      props.setDiceState('');
      props.setMessage(
        <div className='message'>
          <p className="messageHead"><strong>No primary specialty for {skill.name}!</strong></p>
          <p>A primary specialty is unlocked with 5 EXP, but requires a +2 in this skill. </p>
        </div>
      )
    } else {
      let rolls = props.rollDice();
      let modifier = skill.modifier + 2;
      let modifierString;
      let name = skill.name;
      let total = rolls.num1 + rolls.num2 + modifier;

      if (modifier > -1) {
        modifierString = `+${modifier}`;
      }

      if (total >= 8) {
        let newCharacter = { ...props.character };
        newCharacter.experienceProgress++;

        if (newCharacter.experienceProgress > 4) {
          newCharacter.experience++;
          newCharacter.experienceProgress = 0;
        }

        props.setCharacter(newCharacter);
      }

      props.setMessage(
        <div className='message'>
          <p className="messageHead"><strong>{name} Check!</strong></p>
          <p>You rolled {rolls.num1} and {rolls.num2}.</p>
          <p>Your modifier is {modifierString || modifier}</p>
          <p className="messageTotal"><strong>Total: {total}</strong></p>
        </div>
      )
    }
  }

  const secondaryCheck = (e) => {
    let skill = {};
    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === e.target.value) {
        skill = props.character.skills[i];
      }
    }

    if (!skill.spec2) {
      props.setDiceState('');
      props.setMessage(
        <div className='message'>
          <p className="messageHead"><strong>No secondary specialty for {skill.name}!</strong></p>
          <p>A secondary specialty is unlocked with 4 EXP, but requires that this skill have a primary specialty.</p>
        </div>
      )
    } else {
      let rolls = props.rollDice();
      let modifier = skill.modifier + 1;
      let modifierString;
      let name = skill.name;
      let total = rolls.num1 + rolls.num2 + modifier;

      if (modifier > -1) {
        modifierString = `+${modifier}`;
      }

      if (total >= 8) {
        let newCharacter = { ...props.character };
        newCharacter.experienceProgress++;

        if (newCharacter.experienceProgress > 4) {
          newCharacter.experience++;
          newCharacter.experienceProgress = 0;
        }

        props.setCharacter(newCharacter);
      }

      props.setMessage(
        <div className='message'>
          <p className="messageHead"><strong>{name} Check!</strong></p>
          <p>You rolled {rolls.num1} and {rolls.num2}.</p>
          <p>Your modifier is {modifierString || modifier}</p>
          <p className="messageTotal"><strong>Total: {total}</strong></p>
        </div>
      )
    }
  }

  return (
    <div className="section skills">
      <h2>Skills</h2>
      <div className="skillsGrid">
        {props.character.skills.map((el, i) => {
          return (
            <div key={`stat${i}`} className={`skillContainer ${el.name === 'Throwdown' ? 'throwdown' : 'skill'}`}>
              <div className="labelContainer">
                <button type='button' className='diceButton'>
                  <input type='image' value={el.name} onClick={() => { skillCheck(el.name) }} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                </button>
                <p><em>{el.name}</em></p>
              </div>

              <div className="statModifiers">
                <p>-1</p>
                <p>+0</p>
                <p>+1</p>
                <p>+2</p>
                <p>+3</p>
              </div>
              <div className="bubbleContainer">
                <div className='bubble filled'></div>
                <div className={el.modifier >= 0 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 1 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 2 ? 'bubble filled' : "bubble"}></div>
                <div className={el.modifier >= 3 ? 'bubble filled' : "bubble"}></div>
              </div>

              <div className="specialtyContainer">
                <div className="specialty">
                  <button type='button' className='diceButton'>
                    <input type='image' value={el.name} onClick={primaryCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                  </button>
                  <p>{el.spec1 || 'Primary'} (+2)</p>
                </div>
                <div className="specialty">
                  <button type='button' className='diceButton'>
                    <input type='image' value={el.name} onClick={secondaryCheck} src='/static/icons/dice-solid.svg' alt={`roll for ${el.name}`} className='filter' />
                  </button>
                  <p>{el.spec2 || 'Secondary'} (+1)</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;