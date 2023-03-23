import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

import {Link,NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className = "NavBar">
            <NavLink to='/'className="Logo"><h1>DeporHouse - Casa de Deportes</h1></NavLink>
            <div className = "Menu">
                <NavLink to='/category/futbol'><button>Futbol</button></NavLink>
                <NavLink to='/category/basquet'><button>Basquet</button></NavLink>
                <NavLink to='/category/supsurf'><button>Surf/SUP</button></NavLink>
                <NavLink to='/category/tenis'><button>Tenis</button></NavLink>
                <NavLink to='/category/running'><button>Running</button></NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar