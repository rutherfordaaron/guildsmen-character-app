import "./RaceInfo.css";

const RaceInfo = (props) => {
  const closeRaceInfo = () => {
    document.getElementById("raceInfo").classList.add("hidden");
  }

  return (
    <div id="raceInfo" className="raceInfo hidden">
      <button type="button" onClick={closeRaceInfo} className="closeBtn">
        <img src="/static/icons/xmark-solid.svg" alt="Close info" className="filter" />
      </button>
      <h2>{props.race}</h2>
      {props.race === "Locess" ?
        <div>
          <p>Locess are bug like creatures. They have 4 arms and their entire body is covered in a carapace. They have multifaceted eyes and antennae on top of angular heads. Thier culture is built around agriculture and reverence toward nature - especially plants. They build their homes in the boughs of great World Trees.</p>

          <table className='raceStatTable'>
            <thead>
              <tr>
                <th colSpan='1'>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='bottom left right'><em>+2 Nimble</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>-1 tough</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>+1 Competence</em></td>
              </tr>
              <tr>
                <td className='bottom left right'><em>+0 Constitution</em></td>
              </tr>
            </tbody>
          </table>
        </div> :
        props.race === "Mausca" ?
          <div>
            <p>Mausca are small, thin creatures with plant-like features. Their hair is made of moss and vines, their skin looks like tree bark, and their eyes look like sea pearls. Their culture is tribalistic, revering the water and the life it brings them and all creatures. They build their homes in swampy wetlands from mud, leaves, and branches.</p>

            <table className='raceStatTable'>
              <thead>
                <tr>
                  <th colSpan='1'>Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='bottom left right'><em>+2 Nimble</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>-1 tough</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>+0 Competence</em></td>
                </tr>
                <tr>
                  <td className='bottom left right'><em>+1 Constitution</em></td>
                </tr>
              </tbody>
            </table>
          </div> :
          props.race === "Orc" ?
            <div>
              <p>Orcs are large, burly creatures with small tusks protruding from their mouths and small horns protruding from the tops of their heads. Their culture is one of clans that hunt great beasts to show strength. They build their small towns in grassy plains, and they are known best for their excelent skill in hunting Mythical creatures</p>

              <table className='raceStatTable'>
                <thead>
                  <tr>
                    <th colSpan='1'>Stats</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='bottom left right'><em>+0 Nimble</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>+2 tough</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>+0 Competence</em></td>
                  </tr>
                  <tr>
                    <td className='bottom left right'><em>+0 Constitution</em></td>
                  </tr>
                </tbody>
              </table>
            </div> :
            props.race === "Sentari" ?
              <div>
                <p>Sentari are the tallest of the races, with blunt features. Their skin is a marbling of red and brown and they have no hair on their bodies, whatsoever. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Their communities are generally very close-knit.</p>

                <table className='raceStatTable'>
                  <thead>
                    <tr>
                      <th colSpan='1'>Stats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='bottom left right'><em>-1 Nimble</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>+1 tough</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>+1 Competence</em></td>
                    </tr>
                    <tr>
                      <td className='bottom left right'><em>+0 Constitution</em></td>
                    </tr>
                  </tbody>
                </table>
              </div> :
              props.race === "Slated" ?
                <div>
                  <p>The Slated are a desert people. Their skin is thick and the color of sandstone. They have plates that protrude from their backs that interlock when they crouch down, offering protection against sandstorms and making them appear like boulders to camouflage them from predators. Their culture is centered around invention and engineering. Among the Slated, failure is celebrated.</p>

                  <table className='raceStatTable'>
                    <thead>
                      <tr>
                        <th colSpan='1'>Stats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='bottom left right'><em>-1 Nimble</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>+0 tough</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>+2 Competence</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>+1 Constitution</em></td>
                      </tr>
                    </tbody>
                  </table>
                </div> :
                <div>
                  <p>Ungal are a humanoid fungus people. They have a spongey, not-quite-smooth skin and dark, sickly moss that grows on their bodies. They are known for building communities in the deepest and darkest forests and their culture reveres death and decay, as all life must someday end.</p>

                  <table className='raceStatTable'>
                    <thead>
                      <tr>
                        <th colSpan='1'>Stats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='bottom left right'><em>+0 Nimble</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>-1 tough</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>+1 Competence</em></td>
                      </tr>
                      <tr>
                        <td className='bottom left right'><em>+2 Constitution</em></td>
                      </tr>
                    </tbody>
                  </table>
                </div>}
    </div>
  )
}

export default RaceInfo;