import React from 'react'
import './experience.css'

function Experience(){
    return(
        <div className='page-exp'>
            <div className='page-exp-l'>

            </div>
            <div className='page-exp-r'>
                <div className='page-exp-r-cont'>
                    <div className='page-header'>
                        <h2 className='exp-header-text'>Professional Experiences</h2>
                    </div>
                    <div className='experience-container'>
                        {/* <h1>Here is some container information</h1> */}
                        <div className='exp-flex'>
                            <div className='exp-left'>
                                {/* <p>hello there</p> */}
                            </div>
                            <div className='exp-right'></div>
                        </div>
                        <div className='exp-flex'>
                            <div className='exp-sing'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience;