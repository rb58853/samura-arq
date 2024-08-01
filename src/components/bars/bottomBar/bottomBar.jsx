import { useSelector } from 'react-redux'
import './styles/desktop.css'

function BottomBar() {
    const sesion = useSelector((state) => state.sesion).name

    return (
        <div className={`bottomBar ${sesion === 'about' ? 'fixed' : ''}`}>
            {/* <img className='logo' src={process.env.PUBLIC_URL + '/logo/white.png'} /> */}
            {/* <ButtonsNavigate /> */}
        </div>
    )
}


export default BottomBar
