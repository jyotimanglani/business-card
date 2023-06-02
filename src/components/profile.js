import React from 'react';
import ProfileImg from '../images/profilePicture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
    return(
        <div className='card'>
            <img className='card--picture' src={ProfileImg} alt='Profile picture'/>
            <h1>Laura Smith</h1>
            <p className='card--role'>Frontend Developer</p>
            <p className='card--website'>laurasmith.website</p>
        <div className='btn--container'>
            <button className='mail--btn'><FontAwesomeIcon className='mail--icon' icon={faEnvelope} />Email</button>
            <button className='linkedin--btn'><FontAwesomeIcon className = 'linkedin--icon' icon={faLinkedin} />LinkedIn</button> 
        </div>
        </div>
    )

}

export default Profile;