import React from 'react';
import "../header/header.scss";
import logoWhite from '../../assets/conido-logo--white.svg';
import expandArrow from '../../assets/expand-arrow.svg'
import profilepic from '../../assets/profile.svg'

const Header = () => {

    return(
        <div className="header">
            <img src={logoWhite} className="logo-bar" alt="main logo"/>
            <nav className="nav-header">
                {/* <svg xmlns={logoWhite}/> */}
                <span>Ubicaciones
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </span>
                <span>Apartamentos</span>
                <span>Galería</span>
                <span>Sobre Nosotros
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </span>
                <button className="buttons-conido">
                    <span>
                    Contáctanos
                    </span>
                </button>
                <button className="buttons-conido buttons-conido--transparent">
                    <span>
                    Reserva Ya
                    </span>
                </button>
                <div>
                    <img src={profilepic} className="" alt="profile"/>
                </div>

                <div>
                    <span>ES</span>
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </div>
            </nav>
        </div>
    )
}
export default Header