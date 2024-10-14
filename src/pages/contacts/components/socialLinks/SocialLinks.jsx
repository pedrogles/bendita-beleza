import { IoMailOutline, IoLogoInstagram  } from "react-icons/io5";

import "./sociallinks.scss";

export function SocialLinks() {
    return (
        <div className="social-links">
            <a className="social-link" href="https://www.instagram.com/benditabelezarv/" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="insta-icon"/>
            </a>
            <a className="social-link" href="mailto:renatarvcabelosgamil.com.br" target="_blank" rel="noopener noreferrer">
                <IoMailOutline className="mail-icon"/>
            </a>
        </div>
    );
};