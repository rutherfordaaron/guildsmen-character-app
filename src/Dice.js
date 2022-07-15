import { motion } from "framer-motion";

const Dice = (props) => {
  let animate1 = {
    rotateX: `${props.diceStyle1.x}deg`,
    rotateY: `${props.diceStyle1.y}deg`,
  }

  let animate2 = {
    rotateX: `${props.diceStyle2.x}deg`,
    rotateY: `${props.diceStyle2.y}deg`,
  }

  return (
    <div>
      <p className={`rollMessage ${props.diceState}`} id='rollMessage'>{props.rollMessage}</p>
      <div className="diceContainer">
        <motion.div
          animate={animate1}
          transition={{ delay: 1, duration: 1 }}
          className={`dice dice1 ${props.diceState}`}
          style={{
            rotateX: '-45deg',
            rotateY: '-45deg',
            translateZ: '-100px',
          }}
          id="dice1"
        >
          <div className="side one">
            <span className="dot"></span>
          </div>
          <div className="side two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side four">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side five">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side six">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={animate2}
          transition={{ delay: 1, duration: 1 }}
          className={`dice dice2 ${props.diceState}`}
          id="dice2"
          style={{
            rotateX: '-45deg',
            rotateY: '-45deg',
            translateZ: '-100px',
          }}
        >
          <div className="side one">
            <span className="dot"></span>
          </div>
          <div className="side two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side four">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side five">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side six">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default Dice