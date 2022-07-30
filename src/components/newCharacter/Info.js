const Info = (props) => {
  const inputChange = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("errorBorder");
    } else {
      e.target.classList.remove("errorBorder");
    }
    let info = { ...props.info };
    switch (e.target.id) {
      case "name":
        info.name = e.target.value;
        props.setInfo(info);
        break;
      case "demeanor":
        info.demeanor = e.target.value;
        props.setInfo(info);
        break;
      case "physique":
        info.physique = e.target.value;
        props.setInfo(info);
        break;
    }
  }

  return (
    <div>
      <h2>Character Info</h2>
      <p>Please select a Name, Race, Demeanor, and Physique for your character. Choose wisely, these
        cannot be changed after you complete this form.</p>
      <div className="textInputContainer">
        <label className="textInputLabel">Name:
          <input
            className="textInput"
            onChange={inputChange}
            type="text"
            placeholder="Character Name"
            id="name"
            value={props.info.name || ""}
          />
        </label>
        <label className="textInputLabel">Demeanor:
          <input
            className="textInput"
            onChange={inputChange}
            type="text"
            placeholder="Character Demeanor"
            value={props.info.demeanor || ""}
            id="demeanor"
          />
        </label>
        <label className="textInputLabel">Physique:
          <input
            className="textInput"
            onChange={inputChange}
            type="text"
            placeholder="Character Physique"
            value={props.info.physique || ""}
            id="physique"
          />
        </label>
      </div>

      <p><strong>Name</strong> is what other characters and players will refer to you as within the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>
      <p><strong>Demeanor</strong> is how your character holds themself. Write in an adjective like cokcy, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>
      <p><strong>Physique</strong> is how your character is phyisically built. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help the Game Master know what Non-Player Characters in the world would see at a glance.</p>

      <div className="warning fadeOut hidden" id="warning">
        <p>You must enter a name, physique, and demeanor before moving on!</p>
      </div>
    </div>
  )
}

export default Info;