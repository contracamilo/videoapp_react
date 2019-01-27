import React, { Component } from 'react'
import VideoPlayerLayout from '../component/video-player-layout'
import Video from '../component/video'
import Title from '../component/title'
import PlayPause from '../component/play-pause'
import Timer from '../component/timer'
import Controls from '../component/video-player-controls'
import { formattedTime } from '../../libs/utilities'
import ProgressBar from '../component/progres-bar';
import Spinner from '../component/spinner';
import Volume from '../component/volume';
import Fullscreen from '../component/full-screnn'

export default class VideoPlayer extends Component {
    state = {
        playing:false,
        pause: true,
        duration: '',
        currentTime: '',
        durationFloat:0,
        timeFloat:0,
        progess:0,
        loading:false,
        volume:1,
        lastValue:null
        

    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })

    }
    //Cuando ya se ha montado el component y validar algo 
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event  => {
        this.video = event.target
        this.setState({
            duration: formattedTime(this.video.duration),
            durationFloat: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        //console.log(this.video.currentTime)
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            timeFloat:this.video.currentTime
        })
    }

    handleProgressChange = event =>{
       // event.target.value
       this.video.currentTime = event.target.value
    }

    handleSeeking =  event => {
        this.setState({
            loading:true
        })
    }
    
    handleSeeked =  event => {
        this.setState({
            loading:false
        })
    }
    handleVolumeChange =  event => {
        this.video.volume = event.target.value
        this.setState({
            volume:this.video.volume
        })
    }

    handleVolumeToggle = () => {
        const lastValue = this.video.volume
        this.setState ({lastValue})
            if (this.video.volume !== 0) {
                this.video.volume = 0
                this.setState ({
                volume: this.video.volume
            })
           
            } else {
                this.video.volume = this.state.lastValue
                this.setState ({
                volume: this.video.volume
            })
        }
    }

    handleFullScreenClick = event => {
        (!document.webkitisFullScreen)
        ? this.player.webkitRequestFullscreen()
        : document.webkitExitFullscreen()
    }

    setRef = element =>{
        this.player = element
    }

    render(){
        return(
            <VideoPlayerLayout
                setRef ={this.setRef}
             >
             <Title title={this.props.title}/>
             <Video
                 autoPlay={this.props.autoplay}
                 pause={this.state.pause}
                 handleLoadedMetadata={this.handleLoadedMetadata}
                 handleTimeUpdate={this.handleTimeUpdate}
                 handleSeeking={this.handleSeeking}
                 handleSeeked={this.handleSeeked} 
                 src={this.props.src}
             />
             <Controls>
                <PlayPause
                    pause={this.state.pause} 
                    handleClick = {this.togglePlay}
                />
                <Timer 
                    duration={this.state.duration}
                    currentTime={this.state.currentTime}
                />
                <ProgressBar 
                    duration={this.state.durationFloat}
                    max={this.state.durationFloat}
                    value={this.state.timeFloat}
                    handleProgressChange={this.handleProgressChange}
                    
                />
                <Volume 
                     handleVolumeChange={this.handleVolumeChange}
                     handleVolumeToggle={this.handleVolumeToggle}
                     volume={this.state.volume}
                />
                <Fullscreen 
                    handleFullScreenClick={this.handleFullScreenClick}
                />
             </Controls>
             <Spinner 
                 active={this.state.loading}
             />
             
            </VideoPlayerLayout>
        )
    }
}