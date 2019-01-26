import React, {Component} from 'react';
import RegularError from  '../component/regular-error'

class HandleError extends Component {
    state = {
        handleError:false,
    }
    componentDidCatch( error, info){
        this.setState({
            handleError:true,
        })
          //envia este error
    }
    render(){
        if(this.state.handleError){
            return(
                <RegularError/>
            )
        }
        return this.props.children
    }
}

export default HandleError