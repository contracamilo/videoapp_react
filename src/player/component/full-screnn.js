import React from 'react'
import FullscreenIcon from '../../icons/components/fullscreen'
import './full-screen.css'

const Fullscreen = props =>(
        <div 
            className="FullScreen"
            onClick={props.handleFullScreenClick}
        >
            <FullscreenIcon 
                size={25}
                color="white"
            />
        </div>
)


export default Fullscreen