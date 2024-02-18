import { DefaultButton } from "../../buttons/defaultbutton/DefaultButton";

import "./homepagecard.scss";

export function HomePageCard({ photo }) {
    return (
        <div className="home-page-card">
            <img className="home-page-card-photo" src={photo} alt="" />
            <div className="home-page-card-text-area">
                <p className="home-page-card-text-area-paragraph">Sempre em busca de encontrar sua melhor versão.</p>
                <div className="home-page-card-button-area">
                    <p className="home-page-card-button-area-paragraph">Agende já seu horário</p>
                    <DefaultButton 
                        text={"Agendar Horário"} 
                        href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
                    />
                </div>
            </div>
        </div>
    )
}