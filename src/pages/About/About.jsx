import React from "react";
import "./About.css"

const About =()=> {
    return(
        <div className="about-page">
         <div className ="about-header">
           <h1> Our Story </h1>
           <p> The journey of bringing authentic Nepalese flavors to yoout plate. </p>
        </div>

        <div className= "about-content">
            <div className="about-image-wrapper">
                <img src="/downloads/chefphoto.png" alt="chef making momos" className="about-image"/>

            </div>
            <div className="about-text">
                <h2>Passionate About Momoms</h2>
                <p>
                    Welcome to <strong>The Momo Spot</strong>, where every dumpling is a parcel of joy crafted with love and tradition. 
            Our story began with a simple craving for authentic street-style momos and grew into a passion to serve the best 
            to our community.
          </p>
          <p>
             We use only the freshest ingredients, hand-rolled dough, and slowly simmered broths to ensure every bite takes you 
            straight to the bustling streets of Kathmandu.
          </p>
              <div className="about-stats">
                <div className="stat">
                    <h3>5+</h3>
                    <span>Years of Quality</span>

                    </div>
                    <div className="stat">
                        <h3>100k+</h3>
                            <span>Momos Floded</span>
                        
                    </div>
                      <div className="stat">
                <h3>100%</h3>
                <span>Authentic Taste</span>
             </div>
            </div>  
        </div>
    </div>
</div>

    );
};
export default About;