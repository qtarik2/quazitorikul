import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import GetFontAwesomeIcon from "../FontAwesome";
import ProjectList from "../../project-list.json";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <h1>Projects</h1>
      {/* Use Bootstrap's responsive column classes */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {ProjectList.map((project) => {
          return (
            <div className="col" key={project.projectId}>
              <div className="card">
                <img
                  src={project.projectFootage}
                  className="img-fluid"
                  alt="Project"
                  style={{
                    height: "300px",
                    width: "100%", // Ensure full width inside the column
                    objectFit: "cover",
                  }}
                />
                <div className="card-desc">
                  <Button
                    className="d-flex container"
                    styleSheet={{
                      color: "#e29ba7"
                    }}
                    onClick={() => {
                      navigate("/project-details/", { state: { project } });
                    }}
                  >
                    <>
                      {project.projectName}
                      <GetFontAwesomeIcon
                        className="ms-auto mt-2"
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
