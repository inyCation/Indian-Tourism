import React from 'react'

const Cards = ({name,comment}) => {
  return (
    <div className='card_container' >
            <div className="img"></div>
            <div className="data">
                <div className="name">
                    {name}
                </div>
                <div className="comment">
                    {comment}
                </div>
            </div>
    </div>
  )
}

export default Cards