import React from 'react'
import './experience.css'

function Experience(){
    return(
        <div className='exp-container-container'>
            <div className='picture-container'>
                {/* <h1>Hello There</h1> */}
            </div>
            <div className='experience-container'>
                <div className='word-container'>
                    <h1>Work Experiences</h1>
                </div>
                <div className='list-of-experiences'>
                    <div className='experience-grid'>
                        <div className='experience'></div>
                        <div className='experience'></div>
                        <div className='experience'></div>
                        <div className='experience'></div>                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience;