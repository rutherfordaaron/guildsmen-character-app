const StartingSkills = (props) => {
  const changeSkill = (skill, num) => {
    let newSkills = { ...props.skills };
    let currentSkill = newSkills[skill];
    let count = 11;

    if (props.skillCount >= 4 || props.skillCount - currentSkill + num > 4) {
      if (newSkills[skill] === num) {
        newSkills[skill] = -1;
      } else if (newSkills[skill] > num) {
        newSkills[skill] = num;
      } else {
        document.getElementById("warning").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("warning").classList.add("hidden");
        }, 2000);
      }
    } else {
      if (newSkills[skill] === num) {
        newSkills[skill] = -1;
      } else {
        newSkills[skill] = num;
      }
    }
    for (const [key, value] of Object.entries(newSkills)) {
      count += value;
    }
    props.setSkills(newSkills);
    props.setSkillCount(count);
  }

  return (
    <div>
      <h2>Pick your Starting Skills</h2>

      <p>Fill in 4 bubbles on the skills chart below. Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. Starting from the -1 mark, you must increase your skills 4 times. You can increase 4 skills once (up to +0), you can condense your choices into just a couple of skills (2 skills at +1), or any combination, as long as you increase your skills 4 times.</p>

      <p><em>Do not start with the myth skill before reading through the <a href="/rules/myth.html">Myth chapter</a></em></p>

      <p>If you've made a backstory, try to consider what skills would make sense for your backstory. If you haven't made a backstory, feel free to pick whatever skills you think would work for your character.</p>

      <div className="skillsGrid">
        {Object.keys(props.skills).map((key, i) => {
          return (
            <div className="skillContainer" key={`skill${i}`}>
              <label htmlFor={key} className="skillLabel">{key}</label>
              <div className="modifierContainer">
                <p>+0</p>
                <p>+1</p>
                <p>+2</p>
              </div>
              <div className="bubblesContainer">
                <input
                  type="checkbox"
                  className="bubble"
                  name={key}
                  checked={props.skills[key] >= 0}
                  onClick={() => { changeSkill(key, 0) }}
                />
                <input
                  type="checkbox"
                  className="bubble"
                  name={key}
                  checked={props.skills[key] >= 1}
                  onClick={() => { changeSkill(key, 1) }}
                />
                <input
                  type="checkbox"
                  className="bubble"
                  name={key}
                  checked={props.skills[key] >= 2}
                  onClick={() => { changeSkill(key, 2) }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <p className="largeText center"><strong>{props.skillCount} skill increases selected.</strong></p>
      <div className="warning fadeOut hidden" id="warning">
        <p className="center">You must have exactly 4 skill increases before moving on!</p>
      </div>
    </div>
  )
}

export default StartingSkills;