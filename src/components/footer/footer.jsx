import React from 'react';
import "../footer/footer.scss";
import facebooklogo from '../../assets/social media logos/facebook.svg';
import twitterlogo from '../../assets/social media logos/twitter.svg';
import linkedinlogo from '../../assets/social media logos/linkedin.svg';
import instagramlogo from '../../assets/social media logos/instagram.svg';

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left-column">
                    <div className="footer-column">
                        <p className="footer-title">Locations</p>
                        <a className="footer-links" href="/">Berlin</a>
                        <a className="footer-links" href="/">Barcelona</a>
                        <a className="footer-links" href="/">Madrid</a>
                        <a className="footer-links" href="/">Lisbon</a>
                        <a className="footer-links" href="/">Milan</a>
                    </div>
                    <div className="footer-column">
                        <p className="footer-title">Company</p>
                        <a className="footer-links" href="/">About</a>
                        <a className="footer-links" href="/">Careers</a>
                        <a className="footer-links" href="/">Terms</a>
                        <a className="footer-links" href="/">Imprint</a>
                        <a className="footer-links" href="/">Privacy</a>
                        <a className="footer-links" href="/">Press</a>
                    </div>
                    <div className="footer-column">
                        <p className="footer-title">Partnerships</p>
                        <a className="footer-links" href="/">Landlord</a>
                        <a className="footer-links" href="/">Corporates</a>
                    </div>
                </div>
                <div className='footer-center-column'>
                    <div className="footer-column">
                        <div className="footer-logos">
                            <img src={facebooklogo} alt="facebook logo"/>
                            <img src={twitterlogo} alt="twitter logo"/>
                            <img src={instagramlogo} alt="instagram logo"/>
                            <img src={linkedinlogo} alt="linkedin logo"/>
                        </div>
                        <p className="footer-plain-text"><a href="/" className="footer-links footer-links--inline">Aviso legal</a> |  <a href="/" className="footer-links footer-links--inline">Protección de datos</a> | <a href="/" className="footer-links footer-links--inline">Cookies</a>
                        </p>
                        <p className="footer-plain-text footer-plain-text--centered">Powered by <strong>Attomo</strong></p>
                        <p className="footer-plain-text footer-plain-text--centered">© 2022 Alfa Real</p>
                    </div>
                </div>
                <div className="footer-right-column">
                    <div className="footer-column">
                        <p className="footer-plain-text">Coliving <br/> Calle 12 28015 – Madrid <br/> 912 000 000 - 900 000 322 <br/>contacto@coliving.es</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
export default Footer