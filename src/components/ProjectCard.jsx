
function ProjectCard({id,title,description,tech,liveUrl,githubUrl,image}) {
  return (
    <div className="projectscard">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt="" />

      <ul>{tech.map((item)=>(
        <li key={item}>{item}</li>
      ))}</ul>
      <a href={liveUrl}>{liveUrl}</a>
      <a href={githubUrl}>{githubUrl}</a>
    </div>
  )
}

export default ProjectCard
