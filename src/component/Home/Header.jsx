import React from 'react'
import '../Home/Header.css';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>Good Food choices are god investments .</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ipsa, <br /> ex a neque illum doloribus ut!
                </p>
                <button id='order-now'>Order Now</button>
                <button id='learn-more'>Learn More</button>
            </div>
            <div className="col-md-6"></div>
            </div>
        </div>
    </header>
  )
}

export default Header;