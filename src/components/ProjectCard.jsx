
function ProjectCard({id,title,description,tech,liveUrl,githubUrl}) {
  return (
    <div className="projectscard">
      <h2>{title}</h2>
      <h3>{description}</h3>

      <ul>{tech.map((item)=>(
        <li key={item}>{item}</li>
      ))}</ul>
      <a href="">{liveUrl}</a>
      <a href="">{githubUrl}</a>
    </div>
  )
}

export default ProjectCard
