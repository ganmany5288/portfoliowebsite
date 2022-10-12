import React from 'react'
import './skills.css'
import ranni from '../../../images/ranni.jpg'

function Skills(){
    return(
        // <div className='skills-container'>
        //     <h1 className='skills-heading'>Technical Skills</h1>
        // </div>
        <div className='skills-page'>
            <div className='skill-container'>
                <div className='skill-top'>
                    <div className='skills-heading'>
                        <h1>Technical Skills</h1>
                    </div>
                    <div className='skills-legend'>
                        <h1>Legend: </h1>
                        <div className='skills-legend-grid'>
                            <div>1. Started Leaning</div>
                            <div>2. Familiar with concepts</div>
                            <div>3. Able to build small projects</div>
                            <div>4. Able to build medium/large projects</div>
                            <div>5. Able to help others</div>
                            <div>6. Able to answer questions on StackOverflow</div>
                        </div>
                    </div>
                </div>
                <div className='skill-btm'>
                    <div className='skills-chart'>
                        <div className='skills-chart-grid'>
                            <div className='skill'>
                                <div className='skill-name'>
                                    <h1>HTML: </h1>
                                </div>
                                <div className='skill-bar'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;