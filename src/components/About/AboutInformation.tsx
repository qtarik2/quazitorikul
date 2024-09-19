import "./AboutInformation.css"

export function AboutInformation() {
  return (
    <div className="about-information">
      <div className="row justify-content-left">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="p-2">
            <img
              src="profile.svg"
              className="fixed-image img-fluid"
              alt="Profile"
            />
          </div>
          <div className="summary p-2 flex-grow-1 text-center text-md-start">
            Game programmer with experience mostly in systems and gameplay
            programming, who enjoys writing effective, well-organized code and
            is always eager to take on new challenges.
          </div>
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
          I am a 34 year old game programmer that's currently working at
          Fatshark in Stockholm, Sweden. Before that, I worked as a web
          developer for 9 years. I describe myself as a problem solver that
          seeks opportunities to learn new things, at the same time, constantly
          improving my skills. I enjoy creating games that feel great to play,
          with clean code that is easy to read. I thrive on difficult
          challenges, maybe a little too much sometimes as I have a hard time
          letting go if I can not come up with a solution during a coding
          session. Want to know more? You can find my contact information in my
          resume at the top. You can also reach me on any of my social media.
        </p>
      </div>
    </div>
  );
}
