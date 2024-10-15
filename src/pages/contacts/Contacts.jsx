import { BenditaBelezaLogo } from "../../components/benditaBelezaLogo/BenditaBelezaLogo";
import { SocialLinks, WhatsappCall } from "./components";

import "./contacts.scss";

export function Contacts() {
    return (
        <main id="contacts-page">
            <BenditaBelezaLogo image={true} />
            <SocialLinks />
            <WhatsappCall />
        </main>
    );
};