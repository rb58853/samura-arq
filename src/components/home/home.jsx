import { Link } from 'react-router-dom'
import { GetProjects } from './request'
import './styles/desktop.css'

function Home() {
    return (
        <section className="home">
            <img className='homeImage' src={process.env.PUBLIC_URL + '/images/home.jpg'} alt='home'/>
            <Projects />
        </section>
    )
}

function Projects() {
    const projects = GetProjects()
    const projectsView = Object.values(projects).map(item => {
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
    return (
        <Link to={'/project'} className='projectWidget'
            onMouseDown={() => { }}
        >
            <img src={project.image} alt="project" />

            <div className='projectWidgetInfo'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>

            {/* <Link className='projectWidgetView'
                onMouseDown={() => { }}
            >
                <h2>{name}</h2>
                <h3>VIEW</h3>
            </Link> */}
        </Link>
    )
}

export default Home
