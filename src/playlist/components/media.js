import React, { PureComponent } from 'react'  //siempre que creo un compnente llamo a React
import PropTypes from 'prop-types';
import './media.css'

//componente funcional
//componente puro
//componente normal o de estado



class Media extends PureComponent{
    //ES6
    // constructor(props){
    //     super(props)
    //     this.handleCLick = this.handleCLick.bind(this) //dandole contexto  handleClick
    // }

    constructor(props){
        super(props)
        this.state = {
            author: props.author
        } 
    }

    state = {
        author: 'Camilo Rivera' 
    }

    handleClick = (event) =>{
        this.props.openModal(this.props)
        
    }
    
    render(){
        const styles = {
            container:{
                fontSize: 17,
                backgroundColor: '#44546b',
                color:'white',
                padding: '30px',
                cursor: 'pointer',
                border: '1px solid red',
                width: 250
            }
        }
        return(
            //jsx //className = Propiedadade
            <div className="Media" onClick={this.handleClick}>   
                <div className="images" >
                    <img 
                        src= {this.props.cover}
                        alt= {this.props.altimage}
                        width={260} 
                        height={160}
                    />
                </div>
                <div className="text">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.author}</p>
                </div>
            </div>
        )
    }
}


Media.propTypes = {
    cover: PropTypes.string,
    title:  PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
