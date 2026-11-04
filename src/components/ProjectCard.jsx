function ProjectCard({ id, title, description, tech, liveUrl, githubUrl, image }) {
  return (
    <div className="projectscard">
      {image && (
        <div className="projectscard-preview">
          <img src={image} alt={title} />
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      {tech && tech.length > 0 && (
        <ul className="projectscard-tech">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="projectscard-links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;