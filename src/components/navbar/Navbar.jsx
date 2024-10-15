import { MdMenu, MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

import Menu from "./menu/Menu";
import logo from "../../assets/logo/rv.svg";

import "./navbar.scss";
import { sections } from "../../utils/pageSections";
import { scrollToTop } from "../../utils/scrollToTop";

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
            scrollToTop();
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
                <Link  to="/" onClick={() => scrollToTop()}>
                    <img className="logo" src={logo} alt="" />
                </Link>
                <nav className="nav-container">
                    <ul className="nav-content">
                        {sections.map((section) => {
                            return (
                                <li key={section.id} className="nav-item">
                                    <Link className="nav-link" to={section.path} onClick={() => scrollToTop()}>
                                        {section.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}