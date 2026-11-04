import { skills } from "../data.js";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="section-label dark-label">MY SKILLS</span>
        <h2>Skills I use</h2>
        <p>
          Specialized in building scalable, production-ready frontend solutions using
          a modern development stack.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;