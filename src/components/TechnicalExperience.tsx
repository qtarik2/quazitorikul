interface Props {
  skills: string[];
}

function TechnicalExperience({ skills }: Props) {
  return (
    <div className="tech-experience">
      <h1>Technical Experience</h1>
      <ul className="list-group list-group-horizontal">
        {skills.map((skill) => (
          <li className="list-group-item" key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechnicalExperience;
