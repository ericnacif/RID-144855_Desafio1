import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <nav>
                <a href="#home">HOME</a>
                <a href="#sobre">SOBRE</a>
                <a href="#projetos">PROJETOS</a>
                <a href="#contato">CONTATO</a>
            </nav>
        </header>
    );
};

export default Header;