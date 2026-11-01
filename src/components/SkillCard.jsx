
function SkillCard({id,name,icon}) {
  return (
    <div className="skillcard">
      <h2>{name}</h2>
      <img src={icon} alt="" />
    </div>
  )
}

export default SkillCard
