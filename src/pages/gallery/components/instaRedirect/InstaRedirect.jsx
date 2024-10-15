import { FaInstagram } from "react-icons/fa";

import "./instaredirect.scss";

export function InstaRedirect() {
    return (
        <a className='insta-redirect-anchor' href="https://www.instagram.com/benditabelezarv/" target="_blank" rel="noreferrer" alt="">
            <p className='anchor-paragraph'>Arraste para o lado ou acesse nosso Instagram para ver mais fotos e videos.</p>
            <FaInstagram className='insta-icon' alt=""/>
            <p className='anchor-paragraph'>Clique aqui</p>
        </a>
    );
};