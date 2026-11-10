// import heroimage from "../assets/system.png"
import heroimage from "../assets/hero_icon.svg"
import cv from "../assets/Eyob_Tesfaye_Resume.pdf"
import Button from "./Button";


function Hero() {
  function scroll (className){
    const classRoute  = document.querySelector(className)
    if(classRoute){
      classRoute.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <section className="hero">
      <div className="herocontent">
        {/* <span className="section-label">Eyob Tesfaye</span> */}
        <h1>Let's Create Something.</h1>
        <p>
          Hi, I'm Eyob Tesfaye a frontend developer building scalable, responsive web
          applications crafted from scratch with clean architecture.
        </p>
      <div className="hero-buttons">

        <Button onClcik={()=>scroll(".about")} name={"Get Started"}/>
        <a href={cv} download={cv}  className="primary-pill-btn">Downlaod CV</a>
      </div>
      </div>
      <div className="heroimage">
        <img src={heroimage} alt="3D Tech Graphic" />
      </div>
    </section>
  );
}

export default Hero
