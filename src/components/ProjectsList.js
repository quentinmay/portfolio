
import { projects } from "./projects";

import ProjectItem from './ProjectItem';


function ProjectsList() {
    // "https://raw.githubusercontent.com/quentinmay/Video-Clip-Sharer/master/README.md"
    return (
        <div className="projects-header1">
            <h1 className="projects-header-title">Projects</h1>
            {projects.map((project) => {
                return (
                    <ProjectItem project={project} />
                );
            })}
        </div>
    );
}

export default ProjectsList;