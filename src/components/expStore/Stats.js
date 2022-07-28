const Stats = (props) => {
  /**
   * Use the event value to find the selected stat from the character's stats array
   * Store that stat as an object for easy reference and store it's index to manipulate its value later
   * Check if modifier is >= 3
   * * If so, flash an error that tells the user the stat is maxed out
   * Check if character experience is < stat modifier + 2
   * * If so, flash an error that tells the user they don't have enough Experience
   * Otherwise, increment the stored stat's modifier, subtract experience required, and inform the user of successful increase
   * @param {DOM event} e 
   */
  const selectStat = (e) => {
    let stat;
    let index;

    for (let i = 0; i < props.character.stats.length; i++) {
      if (props.character.stats[i].name === e.target.value) {
        stat = { ...props.character.stats[i] };
        index = i;
      }
    }

    if (stat.modifier >= 3) {
      props.setError("That stat is maxed out!");
      props.flash();
    } else if (props.character.exp < stat.modifier + 2) {
      props.setError("Not enough EXP for that!");
      props.flash();
    } else {
      let newCharacter = { ...props.character };
      newCharacter.stats[index].modifier++;
      newCharacter.experience = newCharacter.experience - (stat.modifier + 2);
      props.setCharacter(newCharacter);
      props.setError(`${stat.name} increased!`);
      props.flash();
    }
  }

  return (
    <div>
      <p>What stat would you like to increase?</p>
      <div className='statsContainer'>
        {/* Map over character's skill array to a button for each skill */}
        {props.character.stats.map((el, i) => {
          return (
            <button
              type="button"
              className="block"
              value={el.name}
              onClick={selectStat}
              key={`increaseStat${i}`}
            >
              {el.name} <span className="expReq">({el.modifier < 3 ? `${el.modifier + 2} EXP` : "MAXED"})</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Stats;