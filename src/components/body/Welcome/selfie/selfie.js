import React from 'react'
import './selfie.css'
import ranni from '../../../../images/ranni.jpg'

function Selfie(){
    return(
        <div className='selfie-container'>
            <img src={ranni}></img>
        </div>
    )
}

export default Selfie