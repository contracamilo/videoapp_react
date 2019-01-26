console.log('empezando con react')
import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
//import Playlist from  '../playlist/components/playlist'    // los componentes siempre van con la primera en mayuscula
import data from '../api.json'

//React sirve para crear los bloques dentro de nuestra aplicacion: los legos
// REac dom sirve para renderizar: Poner los legos


const homeContainer = document.getElementById('home-container')

//ReactDOM.render(que voy a renderizar (componente de react), donde lo hare)
render(<Home data = {data} />, homeContainer)   // <Media /> forma en la que reac sabe que esto es un componente que se cierra a si mismo