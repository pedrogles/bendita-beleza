import { MdMenu, MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

import Menu from "./menu/Menu";
import logo from "../../assets/logo/rv.svg";

import "./navbar.scss";

export default function Navbar() {
    const handleOpenMenu = () => {
        const menu = document.querySelector('#menu');
        const navbar = document.querySelector('#navbar-mobile');
        const openMenuIcon = document.querySelector('.open-menu');
        const closeMenuIcon = document.querySelector('.close-menu');
        if(navbar && menu) {
            menu.style.top = "100%";
            menu.style.left = "-2px";
            openMenuIcon.style.display = "none";
            closeMenuIcon.style.display = "block";
            navbar.style.border = "solid .1rem #594032";
            navbar.style.borderBottom = "none";
        };
    }
    const handleCloseMenu = () => {
        const menu = document.querySelector('#menu');
        const navbar = document.querySelector('#navbar-mobile');
        const openMenuIcon = document.querySelector('.open-menu');
        const closeMenuIcon = document.querySelector('.close-menu');
        if(navbar && menu) {
            menu.style.top = "-100vh";
            openMenuIcon.style.display = "block";
            closeMenuIcon.style.display = "none";
            navbar.style.border = "none";
        };
    }
    return (
        <>
            <header id="navbar-mobile">
                <div className="navbar-items">
                    <Link  to="/">
                        <img className="logo" src={logo} alt="" />
                    </Link>
                    <MdMenu className="open-menu" onClick={handleOpenMenu} />
                    <MdClose className="close-menu" onClick={handleCloseMenu}/>
                </div>
                <Menu handleCloseMenu={handleCloseMenu} />
            </header> 
            <header id="navbar-large-screen">
                <Link  to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
                <nav className="nav-container">
                    <ul className="nav-content">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre nós</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/galeria">Galeria</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicos">Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/localizacao">Localização</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contatos">Contatos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}