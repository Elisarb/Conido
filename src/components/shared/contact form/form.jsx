import React from 'react';
import "../contact form/form.scss"

const ContactForm = (props) => {

    return (
        <div className="contact-form">
            <div className='contact-form-title'>
               <span>Solicita información</span> 
            </div>
            <div className='contact-input'>
                <label htmlFor="contact-name" className='label-input'>Nombre</label>
                <input type="text" id="contact-name"></input>
            </div>
            <div className='contact-input'>
                <label htmlFor="contact-phone" className='label-input'>Teléfono</label>
                <input type="text" id="contact-phone"></input>
            </div>
            <div className='contact-input'>
                <label htmlFor="contact-email" className='label-input'>Email</label>
                <input type="text" id="contact-email"></input>
            </div>
            <div className='contact-input contact-input--bigger'>
                <label htmlFor="contact-message" className='label-input'>Email</label>
                <textarea type="text" id="contact-message"/>
            </div>

            <button className="send-form-btn">Enviar solicitud</button>           
            
        </div>
    )
}
export default ContactForm