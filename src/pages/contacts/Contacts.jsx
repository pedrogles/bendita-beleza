import { PageTitle } from "../../components/texts/Texts";

import RvLogo from "../../assets/logo/rv_.svg";

import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineWhatsapp  } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";



import "./contacts.scss";

import {DefaultButton} from '../../components/buttons/defaultbutton/DefaultButton';

export default function Contacts() {
    return (
        <main id="contacts-page">
            <PageTitle name="Contatos" />
            <div className="bendita-beleza-logo-container">
                <img className="bendita-beleza-image" src={RvLogo} alt="" />
                <h2 className="bendita-beleza-title">Bendita Beleza</h2>
                <p className="bendita-beleza-paragraph">Cabeleireira</p>
            </div>
            <div className="social-links">
                <a className="social-link" href="http://" target="_blank" rel="noopener noreferrer">
                    <MdOutlineWhatsapp />
                </a>
                <a className="social-link" href="http://" target="_blank" rel="noopener noreferrer">
                    <HiOutlineMail />
                </a>
                <a className="social-link" href="http://" target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                </a>
            </div>
            <div className="whatsapp-call">
                <p className="whatsapp-call-paragraph">Para agendar seu horário ou tirar dúvidas, acesse os links acima ou clique no botão abaixo.</p>
                <DefaultButton text="Whatsapp" />
            </div>
        </main>
    )
}