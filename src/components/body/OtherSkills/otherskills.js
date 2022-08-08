import React from 'react'
import './otherskills.css'
import ranni from '../../../images/ranni.jpg'

function Otherskills(){
    return(
        <div className='otherskills-container'>
            <h1>Skills &amp; Proficiencies</h1>
            <div className='proficient-grid'>
                <a className='skill' href='https://www.lttstore.com'>
                    <img className='skill-image-placeholder' src={ranni} />
                    <p>Sample Project</p>
                </a>
                <a className='skill' href='https://www.lttstore.com'>
                    <img className='skill-image-placeholder' src={ranni} />
                    <p>Sample Project</p>
                </a>
            </div>
        </div>
    )
}


export default Otherskills;