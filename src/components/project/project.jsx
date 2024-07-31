import './styles/desktop.css'
import { useSelector } from "react-redux"

function ProjectView() {
    const project = useSelector((state) => state.project).project

    return (
        <div className="projectView">

            <div className="projectViewBox">
                <img className="projectViewImage" src={project.image} alt="" />
                <div className="projectViewInfo">
                    <div className="projectViewInfoBasic">
                        <p>{project.city}</p>
                        <h4>{project.name}</h4>
                        <p>{project.date}</p>
                        <p>{'<volver'}</p>

                    </div>
                    <p className="projectViewInfoDescription">
                        {project.description}
                        <p>
                            {project.extraDescription}
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )

}
export default ProjectView