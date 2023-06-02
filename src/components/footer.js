import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
        <div className='footer'>
            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </div>
    )
}
export default Footer;