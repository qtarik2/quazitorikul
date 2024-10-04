import { faGithubSquare, faLinkedin, faSquareUpwork } from "@fortawesome/free-brands-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import GetFontAwesomeIcon from "./FontAwesome";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar fixed-top bg-body navbar-expand-lg">
      <div className="container d-flex align-items-start">
        <a
          className="header navbar-brand"
          onClick={() => navigate("/")} // Trigger navigate on click
          style={{ cursor: "pointer" }} // Add pointer cursor to indicate a clickable link
        >
          <h1 className="display-4">Quazi Torikul Alam</h1>
          <p className="navbar-text">Game Programmer</p>
        </a>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://www.upwork.com/freelancers/~01425355c9269055c4"
                  target="_blank"
                >
                  <GetFontAwesomeIcon
                    icon={faSquareUpwork}
                    size="3x"
                  ></GetFontAwesomeIcon>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://www.linkedin.com/in/qtarik2/"
                  target="_blank"
                >
                  <GetFontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                  ></GetFontAwesomeIcon>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/qtarik2"
                  target="_blank"
                >
                  <GetFontAwesomeIcon
                    icon={faGithubSquare}
                    size="3x"
                  ></GetFontAwesomeIcon>
                </a>
              </li>
              <li className="nav-item">
                <div className="resume">
                  <a
                    href="QuaziTorikulAlam_GameProgrammer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desc"
                  >
                    Resume
                    <GetFontAwesomeIcon
                      icon={faCircleDown}
                      size="1x"
                      styleSheet={{ marginLeft: "10px" }}
                    ></GetFontAwesomeIcon>
                  </a>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
