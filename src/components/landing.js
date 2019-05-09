import React from 'react'
import landingStyles from './landing.module.scss'
import landingVideo from '../assets/animation-intro.mp4'

const Landing = () => {
    return (
        <div>
            
            <video className={landingStyles.videolanding} src={landingVideo} />
    
          
            <h1>Hello World</h1>
         
        </div>
    )
}

export default Landing