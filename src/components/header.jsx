import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Header;
