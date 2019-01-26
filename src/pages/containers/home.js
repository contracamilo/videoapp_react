import React, { Component } from 'react'
import HomeLayout from '../components/home-component'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modalcontainer'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'


class Home extends Component {
    state = {
        modalVisible:false,
     }
    //funcion de evento de apertura

    handleOpenModal = (event) => {
        this.setState({
            modalVisible:true,
        })
    }

    //funcion evento de cierre
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }


    render(){
        return(
            <HandleError>
                <HomeLayout >
                    <Related />
                <Categories 
                        categories ={this.props.data.categories}
                        handleOpenModal = {this.handleOpenModal}
                    />
                        
                        { 
                            this.state.modalVisible &&
                            <ModalContainer>
                                    <Modal handleClick={this.handleCloseModal}>
                                        <h1>Esto es una modal</h1>
                                    </Modal>
                            </ModalContainer>
                        } 
                            
                        
                    
                </HomeLayout>
            </HandleError>
        )
    }
}
 
export default Home