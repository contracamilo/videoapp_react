import React, { Component } from 'react'
import './video.css'


export default class Video extends Component{
    togglePlay(){
        (this.props.pause)
        ?  this.video.pause()
        :  this.video.play()
    }
    
    componentWillReceiveProps(nextProps){
        (nextProps.pause !== this.props.pause)  
        ?  this.togglePlay()
        :  this.togglePlay()
    }
    setRef = element =>{
        this.video = element
    }
    render(){
        const { handleLoadedMetadata, handleTimeUpdate, handleSeeking, handleSeeked } = this.props
        return(
            <div className="Video">
                <video
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
             </div>
        )
    }
}