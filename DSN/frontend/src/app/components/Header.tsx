'use client'
import React from 'react';
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">DeveloperHub</div>
            <nav className="navigation">
                <Link href="/profile_about">
                    My Profile
                </Link>
                <Link href="/#Messages">
                    Messages
                </Link>
                <Link href="/#Notifications">
                    Notifications
                </Link>
        </nav>
        </header>
    );
}

export default Header;