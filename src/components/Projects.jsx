import ProjectCard from "./ProjectCard"
import {projects} from "../data.js"

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {
       projects.map(({id,title,description,tech,liveUrl,githubUrl})=>(
  <ProjectCard key= {id} title = {title} description = {description} tech = {tech} liveUrl = {liveUrl} githubUrl = {githubUrl}/>
       ))
      }
    </div>
  )
}

export default Projects
