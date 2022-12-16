import React from 'react';
import "../installations card/card.scss"

const InstallationCard = (props) => {

    return (
        <div className="installation-card">
            <div>
                <img src={props.image} alt="includes"/>
            </div>
            <div className='included-text'>
                <h5 className='included-title'>{props.title}</h5>
                <p className='included-description'>{props.description}</p>
            </div>
        </div>
    )
}
export default InstallationCard