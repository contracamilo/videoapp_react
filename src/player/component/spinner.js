import React from 'react'
import './spinner.css'

const Spinner = (props) => (
    (!props.active)
    ?
    null
    :
    <div className="Spinner">
        <span>Cargando...</span>
    </div>
)

export default Spinner 