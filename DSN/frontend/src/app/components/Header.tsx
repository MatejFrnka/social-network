import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <a href="#" className="logo">DeveloperHub</a>
            <nav className="navigation">
                <Link to="/key-features">Key Features</Link>
                <Link to="/developers-say">Developers Say</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;