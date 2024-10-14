import { DefaultButton } from "../../../../components/buttons/defaultbutton/DefaultButton";

import "./sheduling.scss";

export function Sheduling() {
    return (
        <div className="sheduling">
            <p className="sheduling-paragraph">Para agendar seu horário:</p>
            <DefaultButton 
                text={"Agendar Horário"}
                href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
            />
        </div>
    );
};