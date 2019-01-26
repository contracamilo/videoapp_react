import React from 'react';
import Media from './media.js'
import './playlist.css'


//componente funcional
function Playlist(props){
    
        //const playlist = props.data.categories[0].playlist
        //console.log(props.data)
        return (
            <div className="Playlist">
                {
                    props.playlist.map((item)=>{
                        return <Media  handleClick = {props.handleOpenModal}  key={item.id} {...item} />
                    })
                }
              
            </div>
        )
}


export default Playlist;