import { useSelector } from 'react-redux'
import './styles/desktop.css'
import { GetInfo, GetSocials } from './request'
import { Icon } from '@iconify/react/dist/iconify.js'

function BottomBar() {
    const sesion = useSelector((state) => state.sesion).name

    return (
        // <div className={`bottomBar ${sesion === 'about' ? 'fixed' : ''}`}>
        <div className={`bottomBar`}>
            <ContactInfo />
        </div>
    )
}

function ContactInfo() {
    const info = GetInfo()
    const socials = GetSocials()
    return (
        <div>
            <h4>INFO DE CONTACTO</h4>
            <div className='contactInfo'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>Tel. {info.tel}</p>
                    <p>Email. {info.email}</p>
                    <a className='linkText' href={info.site}>{info.site}</a>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <a href='/'><Icon className='socialImage' icon="uiw:facebook" /></a>
                        <a href='/'><Icon className='socialImage' icon="prime:twitter" /></a>
                    </div>
                </div>
                <p style={{ width: "180px" }}>{info.dir}</p>
            </div>
        </div>
    )
}


function SendEmail() {
    return (
        <div>
        </div>
    )
}



export default BottomBar
