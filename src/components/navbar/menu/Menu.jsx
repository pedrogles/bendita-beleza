import { Link } from "react-router-dom";

import { FaRegSquare } from "react-icons/fa";

import "./menu.scss";

export default function Menu({ handleCloseMenu }) {
    return (
        <nav id="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link className="menu-link" to="/" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/> Início
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/sobre"  onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/> Sobre nós
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/galeria" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/>Galeria
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/servicos" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/>Serviços
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/localizacao" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/>Localização
                    </Link>
                </li>
                <li className="menu-item">
                    <Link className="menu-link" to="/contatos" onClick={handleCloseMenu}>
                        <FaRegSquare className="menu-icon"/>Contatos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}