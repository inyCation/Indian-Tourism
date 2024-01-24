import React from 'react'

const Quotes = ({quote,desc}) => {
  return (
    <div className='quote_continer' >
        <div className="quote">
            {
                quote
            }
        </div>
        
        <div className="desc">
            {
                desc
            }
        </div>
        
    </div>
  )
}

export default Quotes