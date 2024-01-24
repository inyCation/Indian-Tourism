import React from 'react'

const Header = () => {
  return (
    <>
        <nav>
            <div className="logo">IN TOUR</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="login">Login</div>
        </nav>
            <div className='hero_container'>
                <div className="left_menu">
                    <div className="title">आइए हमारे भारत में!! </div>
                    <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, minima iste. Repudiandae consequunt</div>
                    <div className="btn">Have a Glance</div>
                </div>
                <div className="right_img">
                    <div className="btn">Explore History</div>
                </div>
            </div>
    </>
  )
}

export default Header