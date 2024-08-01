import BottomBar from '../bars/bottomBar/bottomBar'
import './styles/desktop.css'
import './styles/mobile.css'
import { useSelector } from "react-redux"

function ProjectView() {
    const project = useSelector((state) => state.project).project

    return (
        <div className='fullContainer'>
            <div className="projectView">
                <a href='/' className='backMobile'>{'< volver'}</a>
                
                <div className="projectViewBox">
                    <img className="projectViewImage" src={project.image} alt="" />
                    <div className="projectViewInfo">

                        <div className="projectViewInfoBasic">
                            <p>{project.city}</p>
                            <h4>{project.name}</h4>
                            <p>{project.date}</p>

                            <a href='/' className='back'>{'< volver'}</a>

                        </div>

                        <p className="projectViewInfoDescription">
                            {project.description}
                            <p>
                                {project.extraDescription}
                            </p>
                        </p>
                    </div>

                    <div className="projectViewInfoMobile">

                        <div className="projectViewInfoBasic">
                            <h4>{project.name}</h4>
                            <div>
                                <p>{project.city}</p>
                                <p>{project.date}</p>
                            </div>
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
            <BottomBar />
        </div>
    )
}
export default ProjectView