import { Link } from 'react-router-dom'
import './styles/desktop.css'
import './styles/mobile.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSesion } from '../../../redux/sesion/sesionSlice'

function TopBar() {
    return (
        <div className="topBar">
            <img className='logo' src={process.env.PUBLIC_URL + '/logo/white.png'} alt='logo' />
            <ButtonsNavigate />
        </div>
    )
}

function ButtonsNavigate() {
    const dispatch = useDispatch()
    const sesion = useSelector((state) => state.sesion).name
    return (
        <div className='buttonsNavigate'>
            <Link
                className={`button ${sesion === 'home' ? 'active' : ''}`}
                to='/'
                onClick={() => { dispatch(setSesion('home')) }}
            >
                HOME
            </Link>

            <Link
                className={`button ${sesion === 'portfolio' ? 'active' : ''}`}
                to='/portfolio'
                onClick={() => { dispatch(setSesion('portfolio')) }}
            >
                PORTFOLIO
            </Link>

            <Link
                className={`button ${sesion === 'about' ? 'active' : ''}`}
                to='/about'
                onClick={() => { dispatch(setSesion('about')) }}
            >
                ABOUT US
            </Link>
        </div>
    )
}

export default TopBar
