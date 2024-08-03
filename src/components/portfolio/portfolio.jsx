import { Link } from 'react-router-dom'
import { GetProjects } from './request'
import './styles/desktop.css'
import './styles/mobile.css'
import { useDispatch } from 'react-redux'
import { setProject } from '../../redux/project/projectSlice'
import BottomBar from '../bars/bottomBar/bottomBar'

function Portfolio() {
    return (
        <div className='fullContainer'>
            <section className="portfolio">
                <Projects />
            </section>
            <BottomBar />
        </div>
    )
}

function Projects() {
    const projects = GetProjects()
    const projectsView = projects.map(item => {
        return <Project project={item} />
    })
    return (
        <div className='projectsWidgetsPortfolio'>
            {/* <h2> FEATURED PROJECTS</h2> */}
            {projectsView}
        </div>
    )

}
function Project({ project }) {
    const dispatch = useDispatch()

    return (
        <Link to={'/project'} className='projectWidgetPortfolio'
            onMouseDown={() => { dispatch(setProject(project)) }}
        >
            <img src={project.image} alt="project" />
            <div className='projectWidgetViewPortfolio' >
                {project.name}
            </div>
            <h3>{project.name}</h3>

        </Link>
    )
}

export default Portfolio
