function SkillCard({ name, description, icon }) {
  return (
    <div className="skillcard">
      <div className="skillcard-icon">
        {icon}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;