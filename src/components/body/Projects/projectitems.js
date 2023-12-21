import React from 'react'
import './project2.css'



function Projectitems(props) {
    const {link, img, h4t, pt} = props
    return(
        <div className='project-items'>
            <a href={link} className='project-link'>
                <img src={img} className="img-responsive" alt='an image'></img>
            </a>
            <div className='project-caption'>
                <h4>{h4t}</h4>
                <p className='text-muted'>{pt}</p>
            </div>
        </div>
    )
}

export default Projectitems