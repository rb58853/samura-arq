import Markdown from 'react-markdown'
import BottomBar from '../bars/bottomBar/bottomBar'
import './styles/desktop.css'
import './styles/mobile.css'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function ProjectView() {
    const project = useSelector((state) => state.project).project

    return (
        <div className="projectView">
            <Link to='/' className='backMobile'>{'< volver'}</Link>

            <div className="projectViewBox">
                <img className="projectViewImage" src={project.image} alt="" />
                <div className="projectViewInfo">

                    <div className="projectViewInfoBasic">
                        <text>{project.city}</text>
                        <h4>{project.name}</h4>
                        <text>{project.date}</text>

                        <Link to='/' className='back'>{'< volver'}</Link>

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
                        <Markdown>
                            {project.extraDescription}
                        </Markdown>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProjectView