import { skills } from "../data"
import SkillCard from "./SkillCard"

function Skills() {

  return (
    <div className="skills">
      <h1>
        Skills
      </h1>
      {
        skills.map(({id,name,icon})=>(
          <SkillCard key={id} name={name} icon={icon}/>
      ))}

    </div>
  )
}

export default Skills
