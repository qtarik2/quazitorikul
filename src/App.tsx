import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AboutInformation, AboutMe } from "./components/About/AboutInformation";
import Education from "./components/Education";
import Projects from "./components/Project/Projects";
import TechnicalExperience from "./components/TechnicalExperience";
import TopBar from "./components/Topbar";
import ProjectDetails from "./components/Project/ProjectDetails";
import "./App.css";

function App() {
  const skillList = ["C++", "C#"];

  return (
    <Router>
      <div className="container-fluid">
        <div className="container">
          <header>
            <TopBar />
          </header>
          <div className="content">
            <Routes>
              <Route path="/" element={<MainContent skillList={skillList} />} />
              <Route path="/project-details" element={<ProjectDetails />} />
            </Routes>
          </div>
        </div>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

const MainContent = ({ skillList }: { skillList: string[] }) => (
  <>
    <AboutInformation />
    <Projects />
    <Education />
    <TechnicalExperience skills={skillList} />
  </>
);

// Simple function to hide the footer on the ProjectDetails page
function ConditionalFooter() {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/project-details/");

  return (
    !hideFooter && (
      <footer>
        <AboutMe />
      </footer>
    )
  );
}

export default App;
