import React from 'react'
import Intro from './intro/intro'
import Selfie from './selfie/selfie'
import './welcome.css'

function Welcome(){
    return(
        <div className='welcome-container'>
            <Intro />
            {/* <Selfie /> */}
        </div>
    )
}

export default Welcome