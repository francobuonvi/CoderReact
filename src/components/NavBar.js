import CartWidget from './CartWidget'
//import {Link, NavLink} from "react-router-dom"


function NavBar(){
    return(
            <nav className='nav_barra'>
                <div className="container nav_container">
                    <div className="redes">
                        <h1>A2P Store</h1>
                    </div>
                    <div className="links_menu">
                        <ul id='menu' className='no-style horizontal'>
                            <li/><a className='menu2' to='index.html'>Inicio</a>
                            <li/><a className='menu2' to='#Manual'>Manual</a>
                            <li/><a className='menu2' to='#Clases'>Clases</a>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>

    )

}

export default NavBar