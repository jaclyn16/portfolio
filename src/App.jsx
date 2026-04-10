import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiPostgresql, SiPostman } from "react-icons/si";
import ProjectCard from './components/ProjectCard.jsx';
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Jackie Grix</h1>
      <h3 style={{ textAlign: "center" }}>Software Developer</h3>

      <h2>About Me</h2>
      <p>I am a full stack developer who builds responsive web applications using React, APIs, and databases. I focus on creating clean, user-friendly interfaces and connecting front-end applications to backend systems. I enjoy solving problems through code and continuously improving my skills by building real-world projects.</p>

      <h2>Skills</h2>
      <div className="skills-container">
        <span><FaReact /> React</span>
        <span><SiJavascript /> JavaScript</span>
        <span><FaHtml5 /> HTML</span>
        <span><FaCss3Alt /> CSS</span>
        <span><FaNodeJs /> Node.js</span>
        <span><SiExpress /> Express</span>
        <span><SiPostgresql /> SQL</span>
        <span><SiPostman /> Postman</span>
        </div>
      

      <h2>My Projects</h2>
<div className="projects-container"> 
      <ProjectCard
        title="Countries App"
          description="Displays country data with details and saved favorites."
          link="https://github.com/jaclyn16/countries-app"
          live="https://countries-version-4.netlify.app/"
      />

      <ProjectCard
        title="Food Trucks App"
          description="Full stack app using React, Express, and SQL to display and manage food truck data."
          link="https://github.com/jaclyn16/food-trucks-app"
          live="https://food-trucks-app.netlify.app/"
      />
      
      <ProjectCard
        title="Top 10 Beaches"
          description="Full stack app with database integration to display and manage beach locations and images."
          link="https://github.com/jaclyn16/top-10-beaches"
          live="https://top-10-beaches.netlify.app/"
        />
        
        <ProjectCard
        title="Product Feedback App (🚧 In Progress)"
          description="Building a full stack app where users can submit and manage product feedback."
          link="https://github.com/jaclyn16/product-feedback-app"
          live="#"
        />


      </div>
      <div className="footer">
        <h3>Connect with Me</h3>
        <a href="https://github.com/jaclyn16" target="_blank" rel="noopener noreferrence">
          <FaGithub /> GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/jackie-grix/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        
 </div>


    </div>
  );

  
}

export default App;
