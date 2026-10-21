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
      "Build gameplay and backend systems for shipped multiplayer Roblox titles on a Rojo, Knit, Roact and Rodux stack.",
      "Own systems end to end on live titles, from core interaction mechanics and mission objectives to lobby flow, progression, monetization and seasonal live events.",
      "On Robbery Simulator, designed the NPC and police AI, the Heat escalation system, and a custom navigation stack replacing the engine pathfinder.",
      "Now building Highway Wrecker, a Unity 6 mobile arcade title for release under Auleek.",
    ],
  },
  {
    company: "GameSoc Studios",
    location: "Cyprus (Remote)",
    role: "Unity Game Developer",
    period: "June 2023 - March 2024",
    points: [
      "Built the virtual-currency payout path for thousands of users, then added Binance withdrawals for the players who had no access to Coinbase. 70% moved to the new method.",
      "Integrated PlayFab for account management, economy and player data, alongside authentication and ad-based monetization.",
      "Hardened the economy against exploits and handled live player support for login and account issues.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Game Programmer",
    period: "December 2021 - May 2023, April 2024 - December 2025",
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
