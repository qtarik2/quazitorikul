import "./Experience.css";

interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  companyLink?: string;
  points: string[];
}

const experienceList: Experience[] = [
  {
    company: "Auleek",
    location: "Dhaka, Bangladesh",
    role: "Game Developer",
    period: "January 2026 - Present",
    current: true,
    companyLink: "https://auleek.com/",
    points: [
      "Build gameplay and backend systems for multiplayer Roblox titles on a Rojo, Knit, Roact and Rodux stack.",
      "Own systems end to end on a live title, from core interaction mechanics and mission objectives to lobby flow, progression, monetization and seasonal live events.",
      "Design the character simulation and a custom navigation stack for an unannounced project, alongside the internal tooling the team tests against.",
    ],
  },
  {
    company: "GameSoc Studios",
    location: "Cyprus (Remote)",
    role: "Unity Game Developer",
    period: "June 2023 - March 2024",
    points: [
      "Developed custom solutions to enable additional vendor support, facilitating the distribution of earned virtual currency to thousands of users across multiple games.",
      "Integrated PlayFab for account management, economy and player data, alongside authentication and ad-based monetization.",
      "Contributed to increased user engagement and growth for multiple live titles.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Game Programmer",
    period: "December 2021 - December 2025",
    points: [
      "Over 15 successfully completed projects with consistently positive client feedback.",
      "Delivered work across Unity 3D, backend and API integration for clients on Android, iOS and WebGL.",
      "Experienced in working both independently and collaboratively as part of a team.",
    ],
  },
];

function Experience() {
  return (
    <div className="experiences">
      <h1>Work Experience</h1>
      <div className="container">
        <div className="row">
          {experienceList.map((experience) => (
            <div className="col-md-6 mb-3" key={experience.company}>
              <div className="box me-md-2">
                <div className="experience-head">
                  <h4>
                    {experience.role}
                    {experience.current && (
                      <span className="current-tag">Current</span>
                    )}
                  </h4>
                  <p className="company">
                    {experience.companyLink ? (
                      <a
                        href={experience.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                    {" · "}
                    {experience.location}
                  </p>
                  <p className="period">{experience.period}</p>
                </div>
                <ul>
                  {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
