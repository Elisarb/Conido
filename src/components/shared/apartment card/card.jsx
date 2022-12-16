import React from 'react';
import "../apartment card/card.scss";
import iconBed from "../../../assets/icon_bed.svg";
import iconMap from "../../../assets/icon_map.svg";
import iconFloor from "../../../assets/icon_floor.svg"
import iconHeart from "../../../assets/heart.svg"


const ApartmentCard = (props) => {

    return (
        <div className="apartment-card">

            <div className="house-image" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="house-descr-container">
                <div className="house-descr">
                <p className="house-privacy">Habitación {props.privacy} - {props.location}</p>
                <h5 className="house-address">{props.address}</h5>
            <div className='house-specifications'>
                <img src={iconBed} alt= "icon bed"/>
                <span>{props.nrooms} habs</span>
                <img src={iconMap} alt= "icon map"/>
                <span>{props.sqm} sqm.</span>
                <img src={iconFloor} alt= "icon floor"/>
                <span>{props.floor} piso</span>
            </div>
            <div className='house-disponibility'>
                <div className='house-disponibility-date'>
                    <p>Disponible desde</p>
                    <p className="date-text">{props.date}</p>
                </div>
                <div className= 'house-price-container'>
                    <span className="house-price">
                    €{props.price}
                    </span>
                    <p>/mes</p>
        
                </div>

            </div>
            </div>
            </div>

            <div className='favorite-heart'>
                <img src={iconHeart} alt="favorite heart"/>
            </div>
            
        </div>
    )
}
export default ApartmentCard