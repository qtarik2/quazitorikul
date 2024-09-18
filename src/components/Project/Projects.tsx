import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import GetFontAwesomeIcon from "../FontAwesome";
import ProjectList from "../../project-list.json";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="row row-cols-2">
        {ProjectList.map((project) => {
          return (
            <div className="col" key={project.projectId}>
              {" "}
              {/* Add key prop */}
              <div className="card">
                <img
                  src={project.projectFootage}
                  className="img-fluid"
                  alt="Profile"
                  style={{
                    height: "300px",
                    width: "auto",
                    objectFit: "cover", // Ensures the aspect ratio is maintained
                  }}
                />
                <div className="card-desc">
                  <Button
                    className="d-flex container-fluid"
                    styleSheet={{
                      color: "#e29ba7",
                      fontWeight: "Bold",
                      fontSize: "2.5em",
                      padding: 0,
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => {
                      navigate("/project-details/", {state: {project}});
                    }}
                  >
                    <>
                      {project.projectName}
                      <GetFontAwesomeIcon
                        className="ms-auto"
                        icon={faAnglesRight}
                      />
                    </>
                  </Button>
                  <p className="designation">Game programmer</p>
                  <p className="description">{project.projectDetail}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
