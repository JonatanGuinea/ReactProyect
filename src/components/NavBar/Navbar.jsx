import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../img/apple_logo.png'
import './Navbar.css'

function NavBar({ categories }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map((category, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link " to={`/category/${category.toLowerCase()}`}>{category}</NavLink>
                            </li>
                        ))}
                        <li className='nav-item ms-auto'>
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
