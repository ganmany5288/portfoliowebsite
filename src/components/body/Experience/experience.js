import React from 'react'
import './experience.css'

function Experience(){
    return(
        <div className='page-exp'>
            <div className='page-exp-r'>
                <div className='page-exp-r-cont'>
                    <div className='page-header'>
                        <h2 className='exp-header-text'>Professional Experiences</h2>
                    </div>
                    <div className='flex'>
                        <div className='row-page3-top center-small'>
                            <div className='row-display'>
                                <div className='exp-card column-page2 card-sing'>
                                    <div>
                                        <h1 className='card-title chain-same-line'>NewMode - Quality Assurance Analyst</h1>
                                        <h1 className='card-sub'>2022/01 to 2022/05</h1>
                                        <h1 className='card-desc'>Detection and prevention of escaped defects in New/Mode code</h1>
                                        <h1 className='card-desc'>Creating test plans and maintaining test cases</h1>
                                        <h1 className='card-desc'>Bug Reporting and follow up</h1>
                                    </div>
                                    <div className='portion-bottom'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='row-page3-top center-small'>
                            <div className='row-display'>
                                <div className='exp-card column-page2 card-sing'>
                                    <div>
                                        <h1 className='card-title chain-same-line'>Reliable Controls - Software QA Analyst</h1>
                                        <h1 className='card-sub'>2022/05 to 2023/01</h1>
                                        <h1 className='card-desc'>Execute test plans for our hardware, and software products.</h1>
                                        <h1 className='card-desc'>Record test results and issues found using our testing and bug tracking software.</h1>
                                        <h1 className='card-desc'>Created a small test script for Functional Stress Test</h1>
                                    </div>
                                    <div className='portion-bottom'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex-bottom'>
                        <div className='row-page3-top center-small'>
                            <div className='row-display'>
                                <div className='exp-card column-page2 card-sing'>
                                    <div>
                                        <h1 className='card-title chain-same-line'>NewMode - Quality Assurance Analyst</h1>
                                        <h1 className='card-sub'>XXXX to XXXX</h1>
                                        <h1 className='card-desc'>This is my job description</h1>
                                    </div>
                                    <div className='portion-bottom'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <a href="https://www.linkedin.com/in/james-tang-64938616b/" className='exp-button exp-button-show-all' target="_blank">See all!</a>
                </div>
            </div>
        </div>
    )
}


export default Experience;