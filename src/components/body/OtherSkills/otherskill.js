import React from 'react'
import './otherskill.css'
import coffee from '../../../images/coffee.jpeg'
function Otherskill(){
    return(
        <div className='otherskill-container'>
            <div className='otherskill-header'>
                <img className='otherskill-img-placeholder' src={coffee}/>
                <div className='test'>
                    <h1 className='test'>Education, Certification,</h1>
                    <h1>and Volunteering</h1>                    
                </div>
            </div>
            <div className='os-bdy'>
                <div className='os-item'>
                    <h1>Volunteer Coordinator</h1>
                    <p>I did stuff!</p>
                </div>
                <div className='os-item'>
                    <h1>Vikelab Member</h1>
                    <p>I did some other stuff!</p>
                </div>
            </div>
        </div>
    )
}

export default Otherskill