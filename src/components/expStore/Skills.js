const Skills = (props) => {
  /**
   * Use the event value to find the selected skill from the character's skills array
   * Store that skill as an object for easy reference and store it's index to manipulate its value later
   * Check if modifier is >= 3
   * * If so, flash an error that tells the user the skill is maxed out
   * Check if character experience is < skill modifier + 2
   * * If so, flash an error that tells the user they don't have enough Experience
   * Otherwise, increment the stored skill's modifier, subtract experience required, and inform the user of successful increase
   * @param {DOM event} e 
   */
  const selectSkill = (e) => {
    let skill;
    let index;

    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === e.target.value) {
        skill = { ...props.character.skills[i] };
        index = i;
      }
    }

    if (skill.modifier >= 3) {
      props.setError("That skill is maxed out!");
      props.flash();
    } else if (props.character.exp < skill.modifier + 2) {
      props.setError("Not enough EXP for that!");
      props.flash();
    } else {
      let newCharacter = { ...props.character };
      newCharacter.skills[index].modifier++;
      newCharacter.experience = newCharacter.experience - (skill.modifier + 2);
      props.setCharacter(newCharacter);
      props.setError(`${skill.name} increased!`);
      props.flash();
    }
  }

  return (
    <div>
      <p>What skill would you like to increase?</p>
      <div className='skillsGrid'>
        {/* Map over character's skill array to a button for each skill */}
        {props.character.skills.map((el, i) => {
          return (
            <button
              type="button"
              className="block"
              value={el.name}
              onClick={selectSkill}
              key={`increaseSkill${i}`}
            >
              {el.name} <span className="expReq">({el.modifier < 3 ? `${el.modifier + 2} EXP` : "MAXED"})</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;