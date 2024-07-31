import './styles/desktop.css'
import { useSelector } from "react-redux"

function ProjectView() {
    const project = useSelector((state) => state.project)
    const name = project.name

    return (
        <div className="projectView">
            <h1>
                {name}
            </h1>
        </div>
    )

}
export default ProjectView