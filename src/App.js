
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import {CustomProvider} from './components/context'



function App(){

    return(
     <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/> }/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/category/:productCategory" element={<ItemListContainer/> }/>
                        <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
                    </Routes>
            </BrowserRouter>
     </CustomProvider>
    

    )
}

export default App