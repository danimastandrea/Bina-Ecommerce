
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">

        <Link className="navTitle" to='/'>
        <h1 className="navTitle">Bina Deco</h1>
        </Link>

        <nav className='navBar'>
            <ul>
                <li className="navLi">
                  <NavLink className="navLink" to='/categoria/1'>Velas</NavLink>
                </li>
                <li className="navLi">
                  <NavLink className="navLink" to='/categoria/3'>Percheros</NavLink>
                </li>
                <li className="navLi">
                  <NavLink className="navLink" to='/categoria/2'>Lamparas</NavLink>
                </li>
                <li className="navLi">
                  <NavLink className="navLink" to='/categoria/4'>Mensulas</NavLink>
                </li>
            </ul>
        </nav>

       <CartWidget/>

    </header>
  )
  
}

export default NavBar
