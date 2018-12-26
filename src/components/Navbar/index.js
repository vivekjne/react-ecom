import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <header className="header-container">
                <div className="brand">
                    <h2>ECOM</h2>
                </div>
                <nav className="navbar-header">
                    <ul className="navbar-list">
                        <li className="navbar-list__item">
                            <Link className="navbar-list__link" to="/Home" >Home</Link>
                        </li>

                        <li className="navbar-list__item">
                            <Link className="navbar-list__link" to="/About">About</Link>
                        </li>

                        <li className="navbar-list__item">
                            <Link className="navbar-list__link" to="/Categories">Categories</Link>
                        </li>

                         <li className="signup">
                            <Link className="navbar-list__link" to="/Signup">Signup</Link>
                        </li>

                          <li className="login">
                            <Link className="navbar-list__link" to="/Login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}