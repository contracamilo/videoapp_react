import React from 'react'
import VolumeIcon from '../../icons/components/volumeIcon'
import './volume.css'
import Mute from '../../icons/components/mute';

const Volume = (props) => (
     <button 
        className="Volume"
        onClick={props.handleVolumeToogle}
      >
        {
            props.volume
            ?
            <VolumeIcon 
                color="white"
                size={20}
            />
            :
            <Mute
                color="white"
                size={20}
            />


        }

        <div className="Volume-range">
            <input
                type="range"
                min={0}
                step={.05}
                max={1}
                value={props.volume}
                onChange={props.handleVolumeChange}
            />   
        </div>
    </button>
    
)

export default Volume