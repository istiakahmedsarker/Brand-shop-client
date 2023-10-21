import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavButtons = () => {
    return (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/addProduct">Add Product</NavLink>
            </li>
            <li>
                <NavLink to="/myCart">My Cart</NavLink>
            </li>
            <li>
                <NavLink to="/customOrder">Custom Order</NavLink>
            </li>
            <li>
                <NavLink to="/team">Team</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
        </>
    );
};

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { user, signOutFunction } = useAuth();

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`navbar ${isDarkMode ? 'bg-base-900' : 'bg-base-100'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Dropdown menu */}
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    {/* Logo */}
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavButtons />
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {/* User avatar and dropdown menu */}
                </div>
                <button className="btn btn-ghost" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
