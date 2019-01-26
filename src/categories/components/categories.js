import React from 'react'
import Category_child from './category'
import './categories.css'


function Categories(props){
    return(
        <div className="Categories">{
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