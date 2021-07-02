import { useState } from 'react'
// import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx';
// import { Markup } from 'react-render-markup';

async function getReadMe(url) {
    try {
        var response = await fetch(url);
        return response.text();
    } catch (err) {
        console.log(err);
    }
}

function ProjectItem({ project }) {
    const [state, setState] = useState({ status: 'loading', data: null });
    if (state.status === 'loading') {
        getReadMe(project.projectMarkDown).then(function (response) {
            setState({ status: "loaded", data: response });
        });
    }
    return (
        <div className="project-header">
            {state.status === "loading" && (
                <>
                </>
            )}
            {state.status === "loaded" && (
                <div className="projects-header" id={project.projectName}>
                    <details>

                        <summary className="project-summary"> <img src={project.projectIcon} alt="" className="project-icon" />{project.projectName}</summary>
                        <div className="project-item">
                            <Markdown>{state.data}</Markdown>
                        </div>
                    </details>
                </div>

            )

            }

        </div>
    );
}

export default ProjectItem;