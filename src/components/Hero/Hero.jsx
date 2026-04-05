import React from 'react'
import "./Hero.css"
import momo from "../../assets/momo.png"

const Hero = () => {
  return (
    <section className='food-hero'>
        {/*shapes*/}
       <span className="food-shape fs-arch"></span>
       <span className="food-shape fs-ticket"></span>
       <span className="food-shape fs-sauce"></span>
        <div className="food-content">
            <span className ="food-badge">Fast And Fresh</span>
            <h1>
                Delicious Momos <br/>
                <span>Delivered to You</span>
            </h1>
            <p>
                Order your Favorite MOMO
            </p>

            <div className="food-actions">
                <button className="btn-order">Order Now</button>
                <button className="btn-menu">View Menu</button>
            </div>
        </div>
        <div className="momo-image">
            <img src={momo} alt="momo img" />
        </div>
    </section>
  )
}

export default Hero