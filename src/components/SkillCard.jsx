function SkillCard({ name, description, icon: Icon }) {
  return (
    <div className="skillcard">
      <div className="skillcard-icon">
        {Icon && <Icon />}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;