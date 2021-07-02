// import { useState } from 'react'


function Project({ projectData }) {

    function scrollToProject() {
        document.getElementById(projectData.projectName).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="project" onClick={scrollToProject}>
            <img src={projectData.projectIcon} alt="" className="project-icon" />
            <h3 className="project-name">{projectData.projectName}</h3>
            <p className="project-description">{projectData.projectShortDescription}</p>
        </div>
    );
}

export default Project;