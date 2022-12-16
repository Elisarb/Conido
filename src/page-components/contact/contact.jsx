import React from 'react';
import  "./contact.scss";
import contactImg from "../../assets/contact-img.png";
import ContactForm from '../../components/shared/contact form/form';

const Contact = () => {

    return(
        <div className="contact-page" id="contact">
            <h1>Contacto</h1>
            <div className="contact-container">
                <div className="contact-image-container">
                    <img src= {contactImg} className= "contact-image" alt="contact"/>
                    <p className="contact-image-text">No es posible garantizar un proyecto como este si detrás no hay un grupo de profesionales y una empresa con gran experiencia y solvencia en el mercado inmobiliario.</p>
                </div>
                <div className='contact-image-container'>
                    <ContactForm></ContactForm>
                </div>
                
            </div>
        </div>
    )
}
export default Contact