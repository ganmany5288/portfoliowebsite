import React from 'react'
import './skills.css'
import ranni from '../../../images/ranni.jpg'

function Skills(){
    return(
        <div className='skills-page'>
            <div className='skills-heading'>
                <h1>Technical Skills</h1>
            </div>
            <div className='skill-container'>
                <div className='skill-left'>
                    <div className='skills-legend'>
                        <h1>Legend: </h1>
                        <div className='skills-legend-list'>
                            <div>1. Started Leaning</div>
                            <div>2. Familiar with concepts</div>
                            <div>3. Able to build small projects</div>
                            <div>4. Able to build medium/large projects</div>
                            <div>5. Able to help others</div>
                            <div>6. Able to answer questions on StackOverflow</div>
                        </div>
                    </div>
                </div>
                <div className='skill-right-container'>
                    <div className='skill-right-flex'>
                        <div className='flex'>
                            <div className='row-display'>
                                <div className='card column-page2 card-l'>
                                    <div className='skill-item'>
                                        <span>HTML: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card column-page2 card-r'>
                                    <div className='skill-item'>
                                        <span>HTML: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='row-display'>
                                <div className='card column-page2 card-l'>
                                    <div className='skill-item'>
                                        <span>HTML: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card column-page2 card-r'>
                                    <div className='skill-item'>
                                        <span>HTML: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='row-display'>
                                <div className='card column-page2 card-l-bottom'>
                                    <div className='skill-item'>
                                        <span>JavaScript: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card column-page2 card-r-bottom'>
                                    <div className='skill-item'>
                                        <span>HTML: </span>
                                        <div className='skill-item-bar'>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='yes'></div>
                                            <div className='no'></div>
                                        </div>
                                    </div>
                                    
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