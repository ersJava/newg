import React from 'react'
import landingStyles from './landing.module.scss'

const Landing = () => {
    return (
        <div>
            
            <video className={landingStyles.videolanding}>
    
                <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4"/>
            </video>
            <view>
            <h1>Hello World1</h1>
                </view>
        </div>
    )
}

export default Landing