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
                    <DefaultButton text={"Agendar Horário"} />
                </div>
            </div>
        </div>
    )
}