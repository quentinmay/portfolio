// import { useState } from 'react'


function Project({ projectData }) {
    return (
        <div className="project">
            <img src={projectData.projectIcon} alt="" className="project-icon" />
            <h3 className="project-name">{projectData.projectName}</h3>
            <p className="project-description">{projectData.projectShortDescription}</p>
        </div>
    );
}

export default Project;