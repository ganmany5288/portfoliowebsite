import React from 'react'
import Projectitems from './projectitems'
import './project2.css'
import ludum54 from '../../../images/ludum54.png'
import test from '../../../images/test.png'

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
                    <Projectitems link={"https://ldjam.com/events/ludum-dare/54/braincell-limited"} img={ludum54} h4t={"GameJam - Ludum Dare 54"} pt={"<Link to Game>"}/>
                    <Projectitems link={"https://hummusportfolio.netlify.app/"} img={test} h4t={"This site"} pt={"<Link to Site>"}/>
                    {/* <Projectitems h4t={"Linus"} pt={"Drop Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/>
                    <Projectitems h4t={"Linus"} pt={"Cat Tips"}/> */}
                </div>
            </div>
        </section>
    )
}

export default Projects2