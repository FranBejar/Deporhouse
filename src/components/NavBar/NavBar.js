import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () =>{
    return(
        <nav className = "NavBar">
            <h1>DeporHouse - Casa de Deportes</h1>
            <div className = "Menu">
                <button>Futbol</button>
                <button>Basquet</button>
                <button>Surf/SUP</button>
                <button>Tenis</button>
                <button>Running</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar