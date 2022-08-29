import React from "react"


const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button>
        </div>
      </div>
    </>
  )
}

export default Ucard
