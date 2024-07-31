import { Link } from 'react-router-dom'
import './styles/desktop.css'

function TopBar() {
    return (
        <div className="topBar">
            <img className='logo' src={process.env.PUBLIC_URL + '/logo/white.png'} />
            <ButtonsNavigate />
        </div>
    )
}

function ButtonsNavigate() {
    return (
        <div className='buttonsNavigate'>
            <Link className='button' to='/'>HOME</Link>
            <Link className='button' to='/'>PORTFOLIO</Link>
            <Link className='button' to='/'>ABOUT US</Link>
        </div>
    )
}

export default TopBar
