const Luck = (props) => {
  return (
    <div>
      <h2>Time to Roll for Luck!</h2>
      <p>Next, you will roll a 1, 6-sided die to determine how lucky your character is. This cannot be changed <em>at all</em> once the die is rolled. So, let's hope the gods are feeling generous.</p>

      <button
        className="luckBtn"
        type="button"
      >
        Roll for Luck
      </button>

      <table className='raceStatTable'>
        <thead>
          <tr>
            <th colSpan='2'>Luck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bottom left'>1</td>
            <td className='bottom right'>-3</td>
          </tr>
          <tr>
            <td className='bottom left'>2</td>
            <td className='bottom right'>-2</td>
          </tr>
          <tr>
            <td className='bottom left'>3</td>
            <td className='bottom right'>-1</td>
          </tr>
          <tr>
            <td className='bottom left'>4</td>
            <td className='bottom right'>+1</td>
          </tr>
          <tr>
            <td className='bottom left'>5</td>
            <td className='bottom right'>+2</td>
          </tr>
          <tr>
            <td className='bottom left'>6</td>
            <td className='bottom right'>+3</td>
          </tr>
        </tbody>
      </table>

      <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the modifier you get here. The higher the total number, the better the outcome.</p>
    </div>
  )
}

export default Luck;