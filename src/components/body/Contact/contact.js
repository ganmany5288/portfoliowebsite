import React from 'react'
import './contact.css'

function Contact(){
    return(
        <div className='contact-container'>
            <div className='contact-info'>
                <h1>NihaoMa</h1>
                <div className='contact-card'>
                    <div>
                        <h1>James Tang</h1>
                        <div className='contacts'>
                            <p>rhsjamestang@gmail.com</p>
                            <p>604-537-3284</p>
                            <p>www.reallygreatsite.com</p>
                        </div>
                    </div>
                    <hr />
                    <div className='test'>
                        <h2>Find Resume and Cover Letter here</h2>
                        <p>Socials!</p>
                        <p>Linkedin</p>
                        <p>Instagram</p>
                        <p>Discord</p>
                        <p>Twitter</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact