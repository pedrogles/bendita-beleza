import '../../style/navbar/navbar.scss';
import RV from '../../assets/logo/RVFullColor.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function Navbar() {
    const openMenu = () => {
        const menu = document.querySelector('.navbar-mobile-menu');
        menu.style.visibility === "hidden" ? menu.style.visibility = "visible" : menu.style.visibility = "hidden"
    }
    const closeMenu = () => {
        const menu = document.querySelector('.navbar-mobile-menu');
        menu.style.visibility === "visible" ? menu.style.visibility = "hidden" : menu.style.visibility = "visible"
    }
    const openDropdown = () => {
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.style.display === "none" ? dropdown.style.display = "flex" : dropdown.style.display = "none"
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
                    <div className='menu-background'>
                        <div className='menu-close'>
                            <AiOutlineClose onClick={closeMenu} className='menu-close-icon'/>
                        </div>
                        <nav>
                            <ul className='menu-itens'>
                                <li><a onClick={closeMenu} href="#home">Inicío</a>
                                </li>
                                <li><a onClick={closeMenu} href="#about">Sobre</a></li>
                                <li><a onClick={closeMenu} href="#services">Serviços</a></li>
                                <li><a onClick={closeMenu} href="#carousel">Fotos</a></li>
                                <li><a onClick={closeMenu} href="#beforeAfter">Antes e Depois</a></li>
                                <li><a onClick={closeMenu} href="#localization">Localização</a></li>
                                <li><a onClick={closeMenu} href="#contact">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="navbar-desktop">
                <img className="navbar-dekstop-logo" src={RV} alt="Logo Renata Victor." />
                <nav>
                    <ul className="navbar-desktop-elements">
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><button onClick={openDropdown} className="dropdown">Serviços</button>
                                <div className="dropdown-content">
                                    <a onClick={openDropdown} href="#services">Lista de serviços</a>
                                    <a onClick={openDropdown} href="#carousel">Fotos</a>
                                    <a onClick={openDropdown} href="#beforeAfter">Antes e depois</a>
                                </div>
                        </li>
                        <li><a href="#localization">Localização</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};