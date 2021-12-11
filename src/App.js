
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App(){

   const usuarios = [
        {nombre:'Franco', edad:27, provincia: 'Buenos Aires',},
        {nombre:'Gonzalo', edad:32, provincia: 'Misiones',},]
    ;

    return(
        <>
            <NavBar/>
            <ItemListContainer greeting={usuarios[0].nombre} />  
             
        </>

    )
}

export default App