import React from 'react';
import "../apartments/apartments.scss"
import ApartmentCard from '../shared/apartment card/card';
import House1 from '../../assets/houses/house1.png';
import House2 from '../../assets/houses/house2.png';
import House3 from '../../assets/houses/house3.png';
import House4 from '../../assets/houses/house4.png';
import House5 from '../../assets/houses/house5.png';
import House6 from '../../assets/houses/house6.png';
import SearchIcon from '../../assets/icons/search_icon.svg'


const Apartments = () => {

    return(
        <div className='apartments-page'>
            <h1>Apartamentos</h1>
            <nav className="nav-bar">
                <div className='search-inputs'>
                    <input type="text" className="input-search input-city" defaultValue="Madrid"></input>
                    <input type="text" className="input-search input-type" placeholder="Home type"></input>
                    <button className="search-btn">Clear All</button>
                    <img className="search-icon" src={SearchIcon} alt="search icon"/>
                </div>
                <div className="switch-container">
                    <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox"/>
                    <label className="react-switch-label" htmlFor={`react-switch-new`}>
                    <span className={`react-switch-button`} />
                    </label>
                    <label className="" htmlFor={`react-switch-new`}>Show Map</label>
                </div>
            </nav>
            <div className="apartments-list">
                <ApartmentCard 
                image={House1}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle Atocha 66 3º Izq"
                nrooms= "8"
                sqm = "9"
                floor="3er"
                date="2 Dic 2022"
                price="600"

                />

                <ApartmentCard 
                image={House2}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle Carranza 10"
                nrooms= "5"
                sqm = "11"
                floor="4to"
                date="2 Dic 2022"
                price="750"

                />

<ApartmentCard 
                image={House3}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle Cedaceros 8 1°"
                nrooms= "8"
                sqm = "9"
                floor="3er"
                date="2 Dic 2022"
                price="600"

                />

<ApartmentCard 
                image={House4}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle Costanilla de Santiago 2 1° Der"
                nrooms= "5"
                sqm = "11"
                floor="4to"
                date="2 Dic 2022"
                price="750"

                />

<ApartmentCard 
                image={House5}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle Colegiata 13 1° Der"
                nrooms= "8"
                sqm = "9"
                floor="3er"
                date="2 Dic 2022"
                price="600"

                />

<ApartmentCard 
                image={House6}
                privacy="Privada"
                location="Madrid, Centro"
                address= "Calle de Don Quijote 22"
                nrooms= "5"
                sqm = "11"
                floor="4to"
                date="2 Dic 2022"
                price="750"

                />
            </div>
            <div className="centered-container">
                <button className="buttons-conido">Ver más</button>
                
            </div>
            <div className="centered-container">
            
            </div>
        </div>
    )
}
export default Apartments