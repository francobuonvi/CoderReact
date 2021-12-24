
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from "./components/Home"
import Cart from "./components/Cart"


function App(){

    return(
        
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<ItemListContainer/> }/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/category/:productCategory" element={<ItemListContainer/> }/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    
                    
                </Routes>
        </BrowserRouter>

    )
}

export default App