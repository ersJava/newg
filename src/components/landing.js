import React from 'react'
import landingStyles from './landing.module.scss'

const Landing = () => {
    return (
        <div>
            <video className={landingStyles.videolanding}>
            <h1>Hello World</h1>
                <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4"/>
            </video>
      
        </div>
    )
}

export default Landing