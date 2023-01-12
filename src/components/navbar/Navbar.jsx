import '../../style/navbar/navbar.scss';

import { Link } from "react-router-dom";

import RV from '../../assets/logo/RVFullColor.png';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';

export default function Navbar() {
    const openMenu = () => {
        const menu = document.querySelector('.navbar-mobile-menu');
        menu.style.visibility === "hidden" ? menu.style.visibility = "visible" : menu.style.visibility = "hidden";
    }
    const openDropdownMobile = () => {
        const dropdown = document.querySelector('.dropdown-content-mobile');
        const arrowDropdown = document.querySelector('.arrow-dropdown');

        if (dropdown.style.display === "none") {
            dropdown.style.display = "flex";
            arrowDropdown.style.transform = "initial";
        } else {
            dropdown.style.display = "none";
            arrowDropdown.style.transform = "rotate(0.25turn)";
        }
        
    }
    const openDropdownDesktop = () => {
        const dropdown = document.querySelector('.dropdown-content-desktop');
        dropdown.style.display === "none" ? dropdown.style.display = "flex" : dropdown.style.display = "none";
    }
    return (
        <header id="navbar">
            <div className="navbar-mobile">
                <div className='navbar-mobile-header'>
                    <img 
                    className="header-logo" 
                    src={RV} alt="Logo Renata Victor." 
                    />
                    <button 
                    onClick={openMenu} 
                    className='header-menu-button'>
                        <AiOutlineMenu className='header-menu-button-icon' />
                    </button>
                </div>
                <div className='navbar-mobile-menu'>
                    <button 
                        onClick={openMenu} 
                        className='menu-close-button'>
                            <AiOutlineMenu className='menu-button-icon' />
                    </button>
                    <nav className='menu-session'>
                        <div className="menu-header">
                            <h2>Menu</h2>
                        </div>
                        <ul className='menu-itens'>
                            <li><a onClick={openMenu} href="/#home">Inicío</a>
                            </li>
                            <li><a onClick={openMenu} href="/#about">Sobre</a></li>
                            <li>
                                <button onClick={openDropdownMobile} className="dropdown-button-mobile">Serviços < MdArrowDropDown className='arrow-dropdown'/></button>
                                <div className="dropdown-content-mobile">
                                    <a onClick={openMenu} href="/#services">Lista de serviços</a>
                                    <a onClick={openMenu} href="/#carousel">Fotos</a>
                                    <a onClick={openMenu} href="/#beforeAfter">Antes e depois</a>
                                </div>
                            </li>
                            <li><a onClick={openMenu} href="/#localization">Localização</a></li>
                            <li><a onClick={openMenu} href="/#contact">Contato</a></li>
                        </ul>
                        <div className="buttons">
                            <Link to="/login">
                                <button disabled onClick={openMenu} className='login' >Entrar</button>
                            </Link>
                            <Link to="/register">
                                <button disabled onClick={openMenu} className='register' >Cadastre-se</button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="navbar-desktop">
                <img className="navbar-dekstop-logo" src={RV} alt="Logo Renata Victor." />
                <nav>
                    <ul className="navbar-desktop-elements">
                        <li><a href="/#home">Início</a></li>
                        <li><a href="/#about">Sobre</a></li>
                        <li>
                            <button onClick={openDropdownDesktop} className="dropdown-button-desktop">Serviços</button>
                            <div className="dropdown-content-desktop">
                                <a onClick={openDropdownDesktop} href="/#services">Lista de serviços</a>
                                <a onClick={openDropdownDesktop} href="/#carousel">Fotos</a>
                                <a onClick={openDropdownDesktop} href="/#beforeAfter">Antes e depois</a>
                            </div>
                        </li>
                        <li><a href="/#localization">Localização</a></li>
                        <li><a href="/#contact">Contato</a></li>
                    </ul>
                </nav>
                <div className="navbar-desktop-buttons">
                    <Link to="/login">
                        <button disabled className='login' >Entrar</button>
                    </Link>
                    <Link to="/register">
                        <button disabled className='register' >Cadastre-se</button>
                    </Link>
                </div>
            </div>
        </header>
    )
};