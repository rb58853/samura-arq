import { Link } from 'react-router-dom'
import { GetProjects } from './request'
import './styles/desktop.css'

function Home() {
    return (
        <section className="home">
            <img className='homeImage' src={process.env.PUBLIC_URL + '/images/home.jpg'} />
            <Projects />
        </section>
    )
}

function Projects() {
    const projects = GetProjects()
    const projectsView = Object.values(projects).map(item => {
        return <Project data={item} />
    })
    return (
        <div className='projectsWidgets'>
            <h2> FEATURED PROJECTS</h2>
            {projectsView}
        </div>
    )

}
function Project({ data }) {
    const name = data.name
    const description = data.description
    const image = data.image
    return (
        <div className='projectWidget'>
            <img src={image} alt="image" />

            <div className='projectWidgetInfo'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>

            <Link className='projectWidgetView'>
                <h2>{name}</h2>
                <h3>VIEW</h3>
            </Link>
        </div>
    )
}

export default Home
