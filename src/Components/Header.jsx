import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () =>(
    <header>
        <nav>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link " to="/input">Input</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/films">Films</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;