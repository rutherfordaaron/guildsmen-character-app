const Start = (props) => {
    /**
     * Set display to change the screen of the expStore according to the value of the button pressed
     * @param {DOM event} e 
     */
    const startClick = (e) => {
        props.setDisplay(e.target.value)
      }

    return (
        <div className="start">
            <p>What would you like to do?</p>
            <button type="button" value="stats" onClick={startClick}>Increase a Stat</button>
            <button type="button" value="skills" onClick={startClick}>Increase a Skill</button>
            <button type="button" value="specialty" onClick={startClick}>Buy a Specialty</button>
          </div>
    )
}

export default Start;