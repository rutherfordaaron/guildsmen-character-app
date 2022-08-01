const Details = (props) => {
  const handleDetails = (e) => {
    let details = [...props.details];
    for (let i = 0; i < details.length; i++) {
      if (details[i].name === e.target.id) {
        details[i].content = e.target.value;
        props.setDetails(details);
      }
    }
  }

  return (
    <div className="details">
      <p>All characters need a past that defines them. This will help you understand how your character would act in the game. You now have the opportunity to fill out your character's Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

      <p>These four concepts help define how your character would behave. In each box, jot down one or two brief sentences that work for your character. If you can't think of anything right away, that's okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

      <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here.</p>

      <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they're seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work.</p>

      <label>What are your character's Goals and Motives?
        <textarea
          name="goals"
          id="goals"
          placeholder="Are they driven by revenge, family, or something else? What do they want out of life?"
          onChange={handleDetails}
          value={props.details[0].content || ""}
        />
      </label>

      <p><strong>Personal Morals</strong> are your character's personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don't know is completely okay. Maybe their okay with stealing, or maybe they're very rigid about following the law. </p>

      <label>What Personal Morals does your character have?
        <textarea
          name="morals"
          id="morals"
          placeholder="What do they believe in? Are they law abiding or do they believe that the law is something made by out-of-touch officials?"
          onChange={handleDetails}
          value={props.details[1].content || ""}
        />
      </label>

      <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they're a kleptomaniac (impulsively steals things), or maybe they're terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they're easily distracted.</p>

      <label>What are your character's Flaws and Weaknesses?
        <textarea
          name="weaknesses"
          id="weaknesses"
          placeholder="What scares your character? What will make them do anything? Do they have any physical deformities?"
          value={props.details[2].content || ""}
          onChange={handleDetails}
        />

      </label>

      <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>

      <label>What Important Connections does your character have?
        <textarea
          name="connections"
          id="connections"
          placeholder="Who in their past was important to them?"
          onChange={handleDetails}
          value={props.details[3].content || ""}
        />
      </label>

      <p>Once you've got some things put in each box, consider writing out a full backstory if you're feeling ambitious. This is where you describe their life and what they've gone through up to the point when the game starts. This is where you can give specific reasons for what you put in those 4 boxes.</p>
    </div>
  )
}

export default Details;