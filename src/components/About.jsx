import developerSvg from "../assets/developer.svg";

function About() {
  return (
    <section className="about" id="about">
      <div className="aboutimage">
        <img src={developerSvg} alt="Developer at desk" />
      </div>

      <div className="aboutcontent">
        <span className="section-label dark-label">ABOUT ME</span>
        <h2>My Story</h2>
        <p>
          I have hands on experiance in building single page application websites,
          landing pages and product showcase websites using modern frontend
          technologies like react and responsive mobile first design approch for
          clients and personal projects.
        </p>
      </div>
    </section>
  );
}

export default About
