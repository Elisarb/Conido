import React from 'react';
import "./header.scss";
import logoWhite from '../../assets/conido-logo--white.svg';
import expandArrow from '../../assets/arrows/expand-arrow.svg'
import profilepic from '../../assets/profile.svg'

const Header = () => {

    return(
        <div className="header">
            <img src={logoWhite} className="logo-bar" alt="main logo"/>
            <nav className="nav-header">
                {/* <svg xmlns={logoWhite}/> */}
                <a href="#locations" className="header-links">Ubicaciones
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </a>
                <a href="#apartments" className="header-links">Apartamentos</a>
                <a href="#gallery" className="header-links">Galería</a>
                <a href="#installations" className="header-links">Sobre Nosotros
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </a>
                <button className="buttons-conido">
                    <a href="#contact" className="header-links">
                    Contáctanos
                    </a>
                </button>
                <button className="buttons-conido buttons-conido--transparent">
                    <a href="#contact" className="header-links">
                    Reserva Ya
                    </a>
                </button>
                <div>
                    <img src={profilepic} className="" alt="profile"/>
                </div>

                <div>
                    <span className="language-select">ES</span>
                    <img src={expandArrow} className="expandArrow" alt="expand arrow"/>
                </div>
            </nav>
        </div>
    )
}
export default Header