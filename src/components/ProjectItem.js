import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

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
    // "https://raw.githubusercontent.com/quentinmay/Video-Clip-Sharer/master/README.md"
    return (
        <div className="project-header">
            {state.status === "loading" && (
                <>
                </>
            )} {state.status === "loaded" && (
                <ReactMarkdown>{state.data}</ReactMarkdown>
            )

            }

        </div>
    );
}

export default ProjectItem;