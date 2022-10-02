import React from 'react'
import './project2.css'

function Projectitems(props) {
    const {h4t, pt} = props
    return(
        <div className='project-items'>
            <a href='https://www.lttstore.com' className='project-link'>
                <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg" className="img-responsive"></img>
            </a>
            <div className='project-caption'>
                <h4>{h4t}</h4>
                <p className='text-muted'>{pt}</p>
            </div>
        </div>
    )
}

export default Projectitems