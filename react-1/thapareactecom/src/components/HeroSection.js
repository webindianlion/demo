import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img src="./images/hero.jpg" alt="hero-section-phovto" className="img-style" />
            </figure>
          </div>
        </div>
        </div>
    
  );
};

export default HeroSection;
