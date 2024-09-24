import "./AboutInformation.css";

export function AboutInformation() {
  return (
    // <div className="about-information">
    //   <div className="row justify-content-left">
    //     <div className="d-flex flex-column flex-md-row align-items-center">
    //       <div className="p-2">
    //         <img
    //           src="profile.svg"
    //           className="fixed-image img-fluid"
    //           alt="Profile"
    //         />
    //       </div>
    //       <div className="summary p-2 flex-grow-2 text-center text-md-start">
    //         Game programmer with experience mostly in systems and gameplay
    //         programming, who enjoys writing effective, well-organized code and
    //         is always eager to take on new challenges.
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="about-information container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 mb-3 mb-md-0 p-2">
          <img
            src="profile.svg"
            className="fixed-image img-fluid"
            alt="Profile Image"
          />
        </div>
        <div className="col-md-9 summary p-2">
          Experienced Game Programmer with expertise in Unity 3D, API
          integration, and backend development. I enjoy writing efficient,
          well-organized code and am always eager to take on new challenges.
        </div>
      </div>
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="container">
        <h1>Hi, I'm Quazi Torikul</h1>
        <p>
          I am a <strong>Game Development</strong> graduate from Multimedia
          University, Malaysia, originally from Bangladesh, and currently
          working as a <strong>freelance</strong> game programmer. I have
          previously worked remotely as a Game Developer for GameSoc Studios,
          Cyprus.
        </p>
        <p>
          I consider myself a <strong>problem solver</strong> who constantly
          seeks opportunities to <strong>learn</strong> and{" "}
          <strong>improve</strong>. I enjoy coding applications and take pride
          in writing clean, well-organized code that's easy to read and
          maintain.
        </p>
        <p>
          I thrive on tackling difficult challenges, and sometimes I can be a
          bit too persistent when trying to find solutions during coding
          sessions. If you'd like to know more, feel free to check out my resume
          above, or reach out to me on any of my social media platforms.
        </p>
      </div>
    </div>
  );
}
