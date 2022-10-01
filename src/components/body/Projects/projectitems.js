import React from 'react'
import './project2.css'

function Projectitems(props) {
    const {h4t, pt} = props
    return(
        <div className='project-items'>
            <a href='https://www.lttstore.com' className='project-link'>
                <img src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" className="img-responsive"></img>
            </a>
            <div className='project-caption'>
                <h4>{h4t}</h4>
                <p className='text-muted'>{pt}</p>
            </div>
        </div>
    )
}

export default Projectitems