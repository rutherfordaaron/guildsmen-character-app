const Complete = () => {
  return (
    <div>
      <h2>Success!</h2>
      <p className="center">Your new character has been added to your chacter list.</p>
      <div className='backToContents'>
        <a href="javascript:location.reload(); history.back();"><img src="/static/icons/arrow-left-solid.svg" alt="" className="filter" />Back</a>
      </div>
    </div>
  )
}

export default Complete;