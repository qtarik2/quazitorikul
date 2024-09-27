import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import GetFontAwesomeIcon from "../FontAwesome";
import {
  faAnglesLeft,
  faLink,
  faScrewdriverWrench,
  faStopwatch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { project } = location.state || {};
  interface AdditionalDetail {
    title: string;
    description: string;
    referenceSnipet?: string;
  }

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
                <div
                  className="video-container"
                  style={{
                    height: "600px", // Set the height to 600px for the container
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    style={{
                      objectFit: project.footageData
                        .fit as React.CSSProperties["objectFit"],
                      height: "100%", // Ensure the video fills the container's height
                      width: "100%",
                    }}
                  >
                    <source
                      src={"../" + project.footageData.src}
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>
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
              <p>
                <GetFontAwesomeIcon
                  icon={faLink}
                  size="sm"
                  styleSheet={{ color: "white" }}
                />{" "}
                Link to the App:{" "}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click me
                </a>
              </p>
            </div>
          </div>
        </div>

        <>
          {project.additionalDetails && project.additionalDetails.length > 0 ? (
            project.additionalDetails.map(
              (detail: AdditionalDetail, index: number) => {
                return (
                  <div className="detail-section" key={index}>
                    <h4>{detail.title}</h4>
                    <p>{detail.description}</p>
                    <img
                      src={"../" + detail.referenceSnipet}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                );
              }
            )
          ) : (
            <p className="text-light">No additional details available</p>
          )}
        </>
      </div>
    </div>
  );
}

export default ProjectDetails;
