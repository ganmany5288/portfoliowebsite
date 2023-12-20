import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './contact.css'

function Contact(){
    return(
        <div className='contact-container'>
            <div className='contact-info'>
                <h1>Contact Info</h1>
                <div className='contact-card'>
                    <div className='contact-info-component'>
                        <h1>James Tang</h1>
                        <div className='contacts'>
                            <p>rhsjamestang@gmail.com</p>
                            <p>604-537-3284</p>
                            <p>www.reallygreatsite.com</p>
                        </div>
                        
                    </div>
                   <hr />
                    <div className='contact-info-component'>
                        <h4>Resume and Cover Letter here</h4>
                        <IconContext.Provider value={{ size: '3rem', className: 'react-icons', color: '#ab6445'}}>
                            <div className='contacts'>
                                <p>Socials!</p>
                                <a href = "https://www.linkedin.com/in/james-tang-64938616b/" target="_blank">
                                    <FaLinkedin />
                                </a>
                                <a href = "https://www.instagram.com/james.tang_/" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href = "https://github.com/ganmany5288" target="_blank">
                                    <FaGithub />  
                                </a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact