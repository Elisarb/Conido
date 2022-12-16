import React from 'react';
import "../locations/locations.scss"
import LocationCard from '../../components/shared/location card/card.jsx';
import barcelona from '../../assets/Barcelona.png';
import madrid from '../../assets/Madrid.png';
import bilbao from '../../assets/Bilbao.png';

const Locations = () => {

    return(
        <div className='locations-page' id="locations">
            <h1>Ubicaciones</h1>
            <p className="descr-locations">Viviendas únicas y exclusivas en una zona privilegiada de Madrid, <br/> Barcelona o Bilbao entre otras.</p>
            <div className='locations-container'>
                <LocationCard image={barcelona} name="BARCELONA"></LocationCard>
                <LocationCard image={madrid} name="MADRID"></LocationCard>
                <LocationCard image={bilbao} name="BILBAO"></LocationCard>
            </div>
        
        </div>
    )
}
export default Locations