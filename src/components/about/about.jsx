import Markdown from 'react-markdown';
import BottomBar from '../bars/bottomBar/bottomBar'
import { GetMembers, GetSamura } from './request'
import './styles/desktop.css'

function About() {
    return (
        <div style={{ width: "100%" }}>
            <div className="about">
                <SamuraAbout />
                <Profiles />
            </div>
            <BottomBar />
        </div>
    )
}

function SamuraAbout() {
    const samura = GetSamura();

    return (
        <div className='aboutSamuraBack'>
            <div className='aboutSamura'>
                <img src={process.env.PUBLIC_URL + '/logo/white.png'} alt = 'samura'/>

                <div>
                    <Markdown>
                        {samura.shortDescription}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}

function Profiles() {
    const members = GetMembers()
    const view = members.map(member => {
        return <Profile person={member} />
    })

    return (
        <div className='profiles'>
            {view}
        </div>
    )
}

function Profile({ person }) {
    return (
        <div className='profile'>
            <img src={person.photo} alt={person.name} />
            <div className='profileInfo'>
                <h5>{person.role}</h5>
                <h3>{person.name}</h3>
                <p>{person.biblio}</p>
                <a className='site' href={person.site}> {person.site}</a>
            </div>
        </div>
    )
}
export default About