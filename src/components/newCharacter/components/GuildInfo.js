const GuildInfo = (props) => {
  const closeGuildInfo = () => {
    document.getElementById("guildInfo").classList.add("hidden");
  }
  return (
    <div id="guildInfo" className="speciesInfo hidden">
      <button type="button" onClick={closeGuildInfo} className="closeBtn">
        <img src="/static/icons/xmark-solid.svg" alt="Close info" className="filter" />
      </button>
      <h2>{props.guild} Guild</h2>
      {props.guild === "Assassins" ?
        <div>
          <p>Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible.</p>

          <table className='speciesStatTable'>
            <thead>
              <tr>
                <th colSpan='1'>Guild Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='bottom left right'><em>Investigate</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>Sneaky</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>Social</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>Throwdown</em></td>
              </tr>
            </tbody>
          </table>
        </div> :
        props.guild === "Mythic Hunters" ?
          <div>
            <p>Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythical creatures, harvest Navidus Crystals from them, and bring the crystals back to the guild. Occasionally, they will get hired to kill Mythical creatures that are causing a nuisance, or to help defend smaller towns from Mythical creature attacks.</p>

            <table className='speciesStatTable'>
              <thead>
                <tr>
                  <th colSpan='1'>Guild Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='bottom left right'><em>Investigate</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>Medic</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>Nature</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>Throwdown</em></td>
                </tr>
              </tbody>
            </table>
          </div> :
          props.guild === "Explorers" ?
            <div>
              <p>Explorers desire to bring the unknown world into the light. They go beyond the borders of the map to discover lands that no race has ever experienced. They know that the wonders of the world are beyond the borders of current maps.</p>

              <table className='speciesStatTable'>
                <thead>
                  <tr>
                    <th colSpan='1'>Guild Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='bottom left right'><em>Craft</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>Investigate</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>Medic</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>Throwdown</em></td>
                  </tr>
                </tbody>
              </table>
            </div> :
            props.guild === "Mercenaries" ?
              <div>
                <p>Mercenaries are those who use their strength to make a profit. They are loyal defenders - if they get paid. They are masters of martial skills and make formidable opponents.</p>

                <table className='speciesStatTable'>
                  <thead>
                    <tr>
                      <th colSpan='1'>Guild Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='bottom left right'><em>Craft</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Medic</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                  </tbody>
                </table>
              </div> :
              <div>
                <p>Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them - if they can be sneaky enough.</p>

                <table className='speciesStatTable'>
                  <thead>
                    <tr>
                      <th colSpan='1'>Guild Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Performace</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Sneaky</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>}
    </div>
  )
}

export default GuildInfo;