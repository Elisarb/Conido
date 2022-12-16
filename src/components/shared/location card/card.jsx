import React from 'react';
import "../location card/card.scss"

const LocationCard = (props) => {

    return (
        <div className="location-card" style={{backgroundImage: `url(${props.image})`}}>
            <h3 className="name-city">{props.name}</h3>
            <button className='buttons-conido buttons-conido--white button-ver-mas'>Ver más</button>
        </div>
    )
}
export default LocationCard