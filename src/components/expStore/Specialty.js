const Specialty = (props) => {
  /**
   * Find skill object based on value of the button clicked by comparing skills names to button value
   * Store the skill in it's own variable for easy reference
   * Set required exp to 5 (or 4 if a primary specialty exists for the skill)
   * If a seconday specialty exists, inform the user that the chosen skill cannot be specialized further
   * If the chosen skill's modifier is < 2, inform the user that skill's level is too low
   * If experience < required experience, inform user that they don't have enough experience
   * Otherwise, change the display to show possible specialties
   * @param {DOM event} e 
   */
  const selectSkillSpec = (e) => {
    let skill = {};

    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === e.target.value) {
        skill = { ...props.character.skills[i] };
      }
    }

    let requiredExp;

    if (skill.spec1) {
      requiredExp = 4;
    } else {
      requiredExp = 5;
    }

    if (skill.spec2) {
      props.setError("You cannot specialize more in this skill.");
      props.flash();
    } else if (skill.modifier < 2) {
      props.setError("That skill's level is too low!");
      props.flash();
    } else if (props.character.exp < requiredExp) {
      props.setError("Not enough EXP for that!");
      props.flash();
    } else {
      props.setSpecSkill(skill);
      props.setDisplay("specialSelect");
      getList(skill.name);
    }
  }

  /**
   * This function sets the specialty list to the corresponding specialties based on the skill name that is passed to it, to be displayed when the player wants to specialize in a skill
   * @param {Skill name} name 
   */
  const getList = (name) => {
    switch (name) {
      case ('Craft'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Clay") }}>Clay</button>
            <button type="button" onClick={() => { setSpec(name, "Fabric") }}>Fabric</button>
            <button type="button" onClick={() => { setSpec(name, "Metal") }}>Metal</button>
            <button type="button" onClick={() => { setSpec(name, "Stone") }}>Stone</button>
            <button type="button" onClick={() => { setSpec(name, "Wood") }}>Wood</button>
          </div>
        )
        break;
      case ('Investigate'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Awareness") }}>Awareness</button>
            <button type="button" onClick={() => { setSpec(name, "Searching") }}>Searching</button>
            <button type="button" onClick={() => { setSpec(name, "Situational") }}>Situational</button>
            <button type="button" onClick={() => { setSpec(name, "Tracking") }}>Tracking</button>
          </div>
        )
        break;
      case ('Leadership'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Business") }}>Business</button>
            <button type="button" onClick={() => { setSpec(name, "Government") }}>Government</button>
            <button type="button" onClick={() => { setSpec(name, "Group") }}>Group</button>
          </div>
        )
        break;
      case ('Medic'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Beasts") }}>Beasts</button>
            <button type="button" onClick={() => { setSpec(name, "People") }}>People</button>
          </div>
        )
        break;
      case ('Myth'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Refinement") }}>Refinement</button>
            <button type="button" onClick={() => { setSpec(name, "Air") }}>Air</button>
            <button type="button" onClick={() => { setSpec(name, "Fire") }}>Fire</button>
            <button type="button" onClick={() => { setSpec(name, "Lightning") }}>Lightning</button>
            <button type="button" onClick={() => { setSpec(name, "Metal") }}>Metal</button>
            <button type="button" onClick={() => { setSpec(name, "Stone") }}>Stone</button>
            <button type="button" onClick={() => { setSpec(name, "Water") }}>Water</button>
          </div>
        )
        break;
      case ('Nature'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Animals") }}>Animals</button>
            <button type="button" onClick={() => { setSpec(name, "Geography") }}>Geography</button>
            <button type="button" onClick={() => { setSpec(name, "Plants") }}>Plants</button>
            <button type="button" onClick={() => { setSpec(name, "Survival") }}>Survival</button>
          </div>
        )
        break;
      case ('Performance'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Acrobatics") }}>Acrobatics</button>
            <button type="button" onClick={() => { setSpec(name, "Acting") }}>Acting</button>
            <button type="button" onClick={() => { setSpec(name, "Contortion") }}>Contortion</button>
            <button type="button" onClick={() => { setSpec(name, "Music") }}>Music</button>
          </div>
        )
        break;
      case ('Social'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Deception") }}>Deception</button>
            <button type="button" onClick={() => { setSpec(name, "Intimidation") }}>Intimidation</button>
            <button type="button" onClick={() => { setSpec(name, "Persuasion") }}>Persuasion</button>
          </div>
        )
        break;
      case ('Sneaky'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Hiding") }}>Hiding</button>
            <button type="button" onClick={() => { setSpec(name, "Lockpick") }}>Lock-Picking</button>
            <button type="button" onClick={() => { setSpec(name, "Pickpocket") }}>Poket-Picking</button>
            <button type="button" onClick={() => { setSpec(name, "Sleights") }}>Slight-of-Hand</button>
          </div>
        )
        break;
      case ('Tech'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Biological") }}>Biological Devices</button>
            <button type="button" onClick={() => { setSpec(name, "Large") }}>Large Devices</button>
            <button type="button" onClick={() => { setSpec(name, "Personal") }}>Personal Devices</button>
            <button type="button" onClick={() => { setSpec(name, "Vehicles") }}>Vehicles</button>
          </div>
        )
        break;
      case ('Throwdown'):
        props.setList(
          <div className="specList">
            <button type="button" onClick={() => { setSpec(name, "Melee") }}>Melee</button>
            <button type="button" onClick={() => { setSpec(name, "Personal") }}>Personal</button>
            <button type="button" onClick={() => { setSpec(name, "Ranged") }}>Ranged</button>
          </div>
        )
        break;
      default:
        console.log("hmmm....");
    }
  }

  /**
   * Find the correct skill to alter by comparing the skill parameter with the names of the skills in the character skills array
   * Store the skill object in it's own variable for easier reference
   * Also store the index of that skill to write over it later
   * If the player chooses a specialty that is already a primary specialty, inform the user that they already have that specialty
   * If the chosen skill has a primary and a secondary specialty, inform the user that they have both speciaties already
   * * (This would only happen if the user tries to buy 3 specialties at one time)
   * Otherwise, inform the user of success and set the specialty to the skill and the skill to the character
   * @param {Skill name} name 
   * @param {Specialty the user chooses} spec 
   */
  const setSpec = (name, spec) => {
    let skill, index;

    for (let i = 0; i < props.character.skills.length; i++) {
      if (props.character.skills[i].name === name) {
        skill = { ...props.character.skills[i] };
        index = i;
      }
    }

    if (skill.spec1 === spec) {
      props.setError('You already have that specialty!');
      props.flash();
    } else if (skill.spec1 && skill.spec2) {
      props.setError('You have both specialties already!');
      props.flash();
    } else {
      props.setError("Specialty aquired!");
      let newCharacter = { ...props.character }
      newCharacter.experience = skill.spec1 ? newCharacter.experience - 4 : newCharacter.experience - 5;
      skill.spec1 ? newCharacter.skills[index].spec2 = spec : newCharacter.skills[index].spec1 = spec;
      props.setCharacter(newCharacter);
      props.flash();
    }
  }

  return (
    <div>
      <p>What skill would you like to specialize?</p>
      <div className='skillsGrid'>
        {/* Map over each item in the skills array to dispaly a button for each one */}
        {props.character.skills.map((el, i) => {
          return (
            <button
              type="button"
              className="block"
              value={el.name}
              onClick={selectSkillSpec}
              key={`specSkill${i}`}
            >
              {el.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Specialty;