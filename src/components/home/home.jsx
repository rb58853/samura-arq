import { Link } from 'react-router-dom'
import { GetProjects } from './request'
import './styles/desktop.css'
import './styles/mobile.css'
import { useDispatch } from 'react-redux'
import { setProject } from '../../redux/project/projectSlice'
import BottomBar from '../bars/bottomBar/bottomBar'

function Home() {
    return (
        <div className='fullContainer'>
            <section className="home">
                <img className='homeImage' src={process.env.PUBLIC_URL + '/images/home.jpg'} alt='home' />
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
        <div className='projectsWidgets'>
            <h2> FEATURED PROJECTS</h2>
            {projectsView}
        </div>
    )

}
function Project({ project }) {
    const dispatch = useDispatch()

    return (
        <Link to={'/project'} className='projectWidget'
            onMouseDown={() => { dispatch(setProject(project)) }}
        >
            <img src={project.image} alt="project" />

            <div className='projectWidgetInfo'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
        </Link>
    )
}

export default Home
