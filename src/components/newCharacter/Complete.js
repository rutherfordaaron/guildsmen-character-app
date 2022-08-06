import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div>
      <h2>Success!</h2>
      <p className="center">Your new character has been added to your chacter list. Please refresh the page before trying to access your new character.</p>
      <div className='backToContents'>
        <Link to="/">
          <img src="/static/icons/arrow-left-solid.svg" alt="" className="filter" />Back
        </Link>
      </div>
    </div>
  )
}

export default Complete;