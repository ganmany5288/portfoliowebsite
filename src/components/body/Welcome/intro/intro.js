import React from 'react'
import './intro.css'
import pfp from '../../../../images/profilepic.jpg'

function Intro(){
    return(
        <div className='intro-container'>
            <h1>Hey I'm James!</h1>
            <div>
                {/* line */}
            </div>
                <img src={pfp} alt="Avatar"/>
            <p>a human being</p>
        </div>
    )
}


export default Intro