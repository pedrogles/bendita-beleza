import { IoMailOutline, IoLogoInstagram  } from "react-icons/io5";

import { MdOutlineWhatsapp  } from "react-icons/md";
import { DefaultButton } from '../../components/buttons/defaultbutton/DefaultButton';

import RvLogo from "../../assets/logo/rv_.svg";

import "./contacts.scss";

export default function Contacts() {
    return (
        <main id="contacts-page">
            <div className="bendita-beleza-logo-container">
                <img className="bendita-beleza-image" src={RvLogo} alt="" />
                <h2 className="bendita-beleza-title">Bendita Beleza</h2>
                <p className="bendita-beleza-paragraph">Cabeleireira</p>
            </div>
            <div className="social-links">
                <a className="social-link" href="http://" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram className="insta-icon"/>
                </a>
                <a className="social-link" href="http://" target="_blank" rel="noopener noreferrer">
                    <IoMailOutline className="mail-icon"/>
                </a>
            </div>
            <div className="whatsapp-call">
                <p className="whatsapp-call-paragraph">Para agendamento ou dúvidas:</p>
                <DefaultButton 
                    text="Whatsapp" 
                    icon={<MdOutlineWhatsapp />} 
                    href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
                />
            </div>
        </main>
    )
}