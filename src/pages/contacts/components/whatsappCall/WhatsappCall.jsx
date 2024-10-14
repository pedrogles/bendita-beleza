import { MdOutlineWhatsapp  } from "react-icons/md";
import { DefaultButton } from '../../../../components/buttons/defaultbutton/DefaultButton';

import "./whatsappcall.scss";

export function WhatsappCall() {
    return (
        <div className="whatsapp-call">
            <p className="whatsapp-call-paragraph">Para agendamento ou dúvidas:</p>
            <DefaultButton 
                text="Whatsapp" 
                icon={<MdOutlineWhatsapp />} 
                href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
            />
        </div>
    );
};