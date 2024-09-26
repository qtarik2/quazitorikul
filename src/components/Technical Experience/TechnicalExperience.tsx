import "./TechnicalExperience.css";

interface Props {
  skills: string[];
}

function TechnicalExperience({ skills }: Props) {
  return (
    <div className="tech-experience">
      <h1>Technical Experience</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechnicalExperience;
