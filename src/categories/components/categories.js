import React from 'react'
import Category_child from './category'
import './categories.css'
import SearchContainer from './../../widgets/containers/searchContainer'

function Categories(props){
    return(
        
        <div className="Categories">
            <SearchContainer />
            {
            props.categories.map((item) =>{
               return (
                   <Category_child 
                        key = {item.id} 
                        {...item} 
                        handleOpenModal = {props.handleOpenModal}
                     />
                )
            })
        }</div>
    )
}




export default Categories