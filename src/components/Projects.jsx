import ProjectCard from "./ProjectCard";
import { projects } from "../data.js";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="section-label dark-label">MY WORKS</span>
        <h2>Featured Projects.</h2>
        <p>
          A selection of web applications and interfaces built with modern technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(({ id, title, description, tech, liveUrl, githubUrl, image }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            tech={tech}
            liveUrl={liveUrl}
            githubUrl={githubUrl}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;