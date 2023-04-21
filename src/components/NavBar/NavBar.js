import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link,NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav className = "NavBar">
            <Link to='/'className="Logo"><h1>DeporHouse - Casa de Deportes</h1></Link>
            <div className = "Menu">
                <NavLink to='/category/futbol' className={({isActive}) => isActive ? 'Active':'BtnOption'}><button>Futbol</button></NavLink>
                <NavLink to='/category/basquet' className={({isActive}) => isActive ? 'Active':'BtnOption'}><button>Basquet</button></NavLink>
                <NavLink to='/category/supsurf' className={({isActive}) => isActive ? 'Active':'BtnOption'}><button>Surf/SUP</button></NavLink>
                <NavLink to='/category/tenis' className={({isActive}) => isActive ? 'Active':'BtnOption'}><button>Tenis</button></NavLink>
                <NavLink to='/category/running' className={({isActive}) => isActive ? 'Active':'BtnOption'}><button>Running</button></NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar