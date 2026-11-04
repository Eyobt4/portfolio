import Contact from "./Contact"

function NavBar() {

  function scroll (className){
    const classRoute  = document.querySelector(className)
    if(classRoute){
      classRoute.scrollIntoView({behavior:"smooth"})
    }
  }
  function manu(){

  }
  return (
    <div className="navbar">
      <div className="navbar-logo">

      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"></path></svg>
      </div>
      <ul>
        <a onClick={()=> scroll(".hero")}>Home</a>
        <a onClick={()=> scroll(".about")}>About Me</a>
        <a onClick={()=> scroll(".skills-section")}>Skills</a>
        <a onClick={()=> scroll(".projects-section")}>Projects</a>
      </ul>
      <button onClick={()=> scroll(".contact-section")} className="primary-pill-btn">Contact me</button>
    </div>
  )
}

export default NavBar
