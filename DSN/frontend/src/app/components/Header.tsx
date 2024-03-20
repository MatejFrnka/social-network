'use client'
import React from 'react';
const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">DeveloperHub</div>
            <nav className="navigation">
                <a href="#KeyFeatures">Key Features</a>
                <a href="#DevelopersSay">Developers Say</a>
                <a href="#Contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;