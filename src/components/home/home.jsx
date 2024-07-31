import TopBar from '../bars/topBar/topBar'
import './styles/desktop.css'

function Home() {
    return (
        <section className="home">
            <img className='homeImage' src={process.env.PUBLIC_URL + '/images/home.jpg'} />

            <TopBar />
        </section>
    )
}

function Project({ data }) {
    const name = data.name
    const description = data.description
    const image = data.image
    
}

export default Home
