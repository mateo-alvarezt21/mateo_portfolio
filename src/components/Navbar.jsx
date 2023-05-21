import React, { useEffect, useState } from 'react'
import "./styles/Navbar.css"


function Navbar({lightMode}) {
    const [menuActivo, setMenuActivo] = useState(false);

    function toggleMenu() {
        setMenuActivo(!menuActivo);
    }

    return (
        <nav className={`${menuActivo ? 'menu menu-activo' : 'menu'} ${lightMode ? 'light' : ''}`}>
            <div className="hamburguesa" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img className='navbar__img-logo' src="./LogoMitri.svg" alt="" />
            <div className="menu__container">
                <ul className={`lista ${lightMode ? 'light' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#proyects">Proyectos</a></li>
                    <img className='navbar__img' src="./LogoMitri.svg" alt="" />
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
        
    );
}

export default Navbar;




