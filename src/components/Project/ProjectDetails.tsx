import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import GetFontAwesomeIcon from "../FontAwesome";
import {
  faAnglesLeft,
  faScrewdriverWrench,
  faStopwatch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { project } = location.state || {};

  return (
    <div className="project-detail">
      <div className="container">
        <Button
          styleSheet={{
            color: "#e29ba7",
            fontWeight: "Bold",
            fontSize: "2.5em",
            padding: 0,
            border: "none",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <>
            <GetFontAwesomeIcon icon={faAnglesLeft} /> Go Back
          </>
        </Button>
        <div>
          {project ? (
            <>
              <figure>
                <img
                  src={"../" + project.projectFootage}
                  className="img-fluid"
                  alt="Profile"
                  style={{
                    width: "100%", // Allow image to scale with its container
                    height: "auto",
                    objectFit: "cover", // Ensures the aspect ratio is maintained
                    maxWidth: "1280px", // Max width constraint for larger screens
                  }}
                />
                <figcaption>
                  <h1>{[project.projectName]}</h1>
                </figcaption>
              </figure>
            </>
          ) : (
            <p>No project details available.</p>
          )}
        </div>
        <div className="row justify-content-between">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="box">
              <h4>About</h4>
              <p>
                Bug Shooter initially started as a gradable assignment for a
                FutureGames course.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <h4>Project Info</h4>
              <p>
                <GetFontAwesomeIcon
                  icon={faUser}
                  size="sm"
                  styleSheet={{ color: "white" }}
                />{" "}
                Role: {project.role}
              </p>
              <p>
                <GetFontAwesomeIcon
                  icon={faUserGroup}
                  size="sm"
                  styleSheet={{ color: "white" }}
                />{" "}
                Team size: {project.members}
              </p>
              <p>
                <GetFontAwesomeIcon
                  icon={faStopwatch}
                  size="sm"
                  styleSheet={{ color: "white" }}
                />{" "}
                Time frame: {project.timeline}
              </p>
              <p>
                <GetFontAwesomeIcon
                  icon={faScrewdriverWrench}
                  size="sm"
                  styleSheet={{ color: "white" }}
                />{" "}
                Engine: {project.engine}
              </p>
            </div>
          </div>
        </div>

        <>
          <div className="detail-section">
            <h4>Title</h4>
            <p>
              Soul Knight is a project that started as part of my 2nd year at
              NHTV University. I took the role of Lead Programmer, implementing
              most of the game's functionality, some of which I feature here. In
              total there were around 20 - 25 people on the project. This
              project helped me learn a lot about Unreal Engine 4, and C++ in
              general.
            </p>
            <img src="../gameplay-gif.gif" className="img-fluid" />
          </div>
          <div className="detail-section">
            <h4>Title</h4>
            <p>
              Soul Knight is a project that started as part of my 2nd year at
              NHTV University. I took the role of Lead Programmer, implementing
              most of the game's functionality, some of which I feature here. In
              total there were around 20 - 25 people on the project. This
              project helped me learn a lot about Unreal Engine 4, and C++ in
              general.
            </p>
            <img src="../gameplay-gif.gif" className="img-fluid" />
          </div>
        </>
      </div>
    </div>
  );
}

export default ProjectDetails;
