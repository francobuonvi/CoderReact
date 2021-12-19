
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
//import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'


function App(){

   const usuarios = [
        {nombre:'Franco', edad:27, provincia: 'Buenos Aires',},
        {nombre:'Gonzalo', edad:32, provincia: 'Misiones',},]
    ;

    return(
        
        //<BrowserRouter>
        <>
            <NavBar/>
            <ItemListContainer greeting={usuarios[0].nombre} />  
            <ItemDetailContainer/>
        </>
             
        //</BrowserRouter>

    )
}

export default App