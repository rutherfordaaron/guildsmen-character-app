const Wealth = (props) => {
  const changeWealth = (e) => {
    props.setWealth(Number(e.target.value));
  }

  return (
    <div>
      <h2>Decide your Character's Wealth</h2>

      <p>This describes how wealthy your character is on average. If you wrote a backstory or wrote out some character details, go with whatever makes the most sense for your backstory and character details. Otherwise, you should go with Moderate.</p>

      <div class="wealthInputContainer">
        <label class="wealthInput">
          <input
            type="radio"
            onClick={changeWealth}
            name="wealth"
            value={1}
            checked={props.wealth === 1}
          />Destitute
        </label>
        <label class="wealthInput">
          <input
            type="radio"
            onClick={changeWealth}
            name="wealth"
            value={2}
            checked={props.wealth === 2}
          />Poor
        </label>
        <label class="wealthInput">
          <input
            type="radio"
            onClick={changeWealth}
            name="wealth"
            value={3}
            checked={props.wealth === 3}
          />Moderate
        </label>
        <label class="wealthInput">
          <input
            type="radio"
            onClick={changeWealth}
            name="wealth"
            value={4}
            checked={props.wealth === 4}
          />Wealthy
        </label>
        <label class="wealthInput">
          <input
            type="radio"
            onClick={changeWealth}
            name="wealth"
            value={5}
            checked={props.wealth === 5}
          />Exquisite
        </label>
      </div>
    </div>
  )
}

export default Wealth;