import React from 'react'
import Category_child from './category'
import './categories.css'
import SearchContainer from './../../widgets/containers/searchContainer'
import Media from '../../playlist/components/media';

function Categories(props){
    return(
        
        <div className="Categories">
            <SearchContainer />
            {
                props.search.map((item) => {
                    return <Media {...item} key={item.id}/>
                })
            }
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