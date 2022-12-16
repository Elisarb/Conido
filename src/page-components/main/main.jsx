import React from 'react';
import "./main.scss"
import Header from '../header/header'
import frontImage from '../../assets/CTL_info_cocina_redu.png'
import logoWhite from '../../assets/conido-logo--white.svg';
import arrowDown from '../../assets/arrows/arrow-down.svg'

const Main = () => {

    return(
        <div className='main-page'>
            <img src= {frontImage} className="front-image" alt="presentation"/>
            <Header></Header>
            <div className="main-introduction">
                <img src={logoWhite} className="main-logo" alt="main logo Conido"/>
                <div className='buttons'>
                    <a href="#contact">
                        <button className='buttons-conido buttons-conido--big'>
                        Contáctanos
                    </button>
                    </a>
                    
                    <a href="#contact">
                    <button className='buttons-conido buttons-conido--big'>
                        Reserva Ya
                    </button>
                    </a>
                    
                </div>

                <div>
                    <a href="#locations">
                        <img src={arrowDown} className="arrow-down" alt="arrow down"/>
                    </a>
                    
                    
                </div>
                
            </div>
            

        </div>
    )
}
export default Main