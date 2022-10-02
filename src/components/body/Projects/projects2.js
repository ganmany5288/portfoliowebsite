import React from 'react'
import Projectitems from './projectitems'
import './project2.css'


function Projects2() {
    return(
        <section className='projects-container'>
            <div className='container'>
                <div className='row'>
                    <div className='text-center'>
                        <h2 className='section-heading'>Projects Section</h2>
                    </div>
                </div>
                <div className='projects-grid'>
                    <Projectitems h4t={"Round Icons"} pt={"Graphic Design"}/>
                    <Projectitems h4t={"Linus"} pt={"Tech Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Drop Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/>
                </div>
            </div>
        </section>
    )
}

export default Projects2