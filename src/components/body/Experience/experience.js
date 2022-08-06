import React from 'react'
import './experience.css'

function Experience(){
    return(
        <div className='experience-container'>
            <div className='word-container'>
                <h1>List of Experiences</h1>
            </div>
            <div className='list-of-experiences'>
                <div className='experience-grid'>
                    <div className='experience'></div>
                    <div className='experience'></div>
                    <div className='experience'></div>
                    <div className='experience'></div>
                    <div className='experience'></div>
                    {/* <div className='experience'></div> */}
                </div>
            </div>
        </div>
    )
}


export default Experience;