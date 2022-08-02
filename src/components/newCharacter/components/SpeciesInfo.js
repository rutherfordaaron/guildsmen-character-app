import "./SpeciesInfo.css";

const SpeciesInfo = (props) => {
  const closeSpeciesInfo = () => {
    document.getElementById("speciesInfo").classList.add("hidden");
  }

  return (
    <div id="speciesInfo" className="speciesInfo hidden">
      <button type="button" onClick={closeSpeciesInfo} className="closeBtn">
        <img src="/static/icons/xmark-solid.svg" alt="Close info" className="filter" />
      </button>
      <h2>{props.species}</h2>
      {props.species === "Locess" ?
        <div>
          <p>Locess (lo-KESS) are bug like creatures. They have 4 arms and their entire body is covered in a carapace. They have multifaceted eyes and antennae on top of their angular heads. Thier culture is built around agriculture and reverence toward nature - especially plants. The Locess build their homes in the boughs of great World Trees.</p>

          <table className='speciesStatTable'>
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
                <td className='bottom left right'><em>-1 Tough</em></td>
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
        props.species === "Mausca" ?
          <div>
            <p>Mausca (mah-SKAH) are small, thin creatures with plant-like features. Their hair is made of moss and vines, their skin looks like tree bark, and their eyes look like sea pearls. Their culture is tribalistic, revering the water and the life it brings them and all creatures. The Mausca build their homes in swampy wetlands from mud, leaves, and branches.</p>

            <table className='speciesStatTable'>
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
                  <td className='bottom left right'><em>-1 Tough</em></td>
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
          props.species === "Orc" ?
            <div>
              <p>Orcs are large, burly creatures with tusks protruding from their mouths and horns protruding from the tops of their heads. Their culture is one of clans. The Orcs build their small towns in grassy plains, and they are known best for their excelent skill in hunting Mythical creatures.</p>

              <table className='speciesStatTable'>
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
                    <td className='bottom left right'><em>+2 Tough</em></td>
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
            props.species === "Matari" ?
              <div>
                <p>Matari (mah-TAR-ee) are the tallest of the species, with blunt features. Their skin is a marbling of red and brown and they have no hair on their bodies. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Matari communities are generally very close-knit.</p>

                <table className='speciesStatTable'>
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
                      <td className='bottom left right'><em>+1 Tough</em></td>
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
              props.species === "Slated" ?
                <div>
                  <p>The Slated (SLAY-ted) are a desert people. Their thick skin is the color of sandstone. The plates that protrude from their backs interlock when they crouch down, offering protection against sandstorms and making them appear like boulders to camouflage them from predators. Slated culture is centered around invention and engineering. Among the Slated, failure is celebrated.</p>

                  <table className='speciesStatTable'>
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
                        <td className='bottom left right'><em>+0 Tough</em></td>
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
                  <p>Ungal (OON-gaul) are a humanoid fungus people. They have a spongey, not-quite-smooth skin and dark, sickly moss that grows on their bodies. The Ungal are known for building communities in the deepest and darkest forests and their culture reveres death and decay, as all life must someday end.</p>

                  <table className='speciesStatTable'>
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
                        <td className='bottom left right'><em>-1 Tough</em></td>
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

export default SpeciesInfo;