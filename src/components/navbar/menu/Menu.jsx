import { Link } from "react-router-dom";

import { FaRegSquare } from "react-icons/fa";

import "./menu.scss";
import { sections } from "../../../utils/pageSections";

export default function Menu({ handleCloseMenu }) {
    return (
        <nav id="menu">
            <ul className="menu-list">
                {sections.map((section) => {
                    return (
                        <li key={section.id} className="menu-item">
                            <Link className="menu-link" to={section.path} onClick={handleCloseMenu}>
                                <FaRegSquare className="menu-icon"/> {section.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}