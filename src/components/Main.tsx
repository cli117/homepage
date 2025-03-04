import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQHErQjv8xT3zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657501462946?e=1746662400&v=beta&t=OfjykwxG5Xnw18mn3eTTu5f0MRtkMbXjXRATJDM8g-M" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/cli117" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cheng-li-8272a3121/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Cheng Li</h1>
          <p>Software Development Engineer</p>
          <p>McGill University</p>

          <p>I am a developer currently transitioning from the gaming industry to a full-stack software engineer role. 
            I have strong learning and adaptation abilities. My graduate thesis was successfully published, and my six years of computer science education have provided me with a solid foundation to quickly master required tech stacks.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/cli117" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/cheng-li-8272a3121/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;