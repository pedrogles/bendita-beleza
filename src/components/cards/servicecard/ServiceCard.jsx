import { LightButton } from "../../buttons/lightbutton/LightButton";
import "./servicecard.scss";

export function ServiceCard({ photo, title, paragraph }) {
    return (
        <div className="service-card">
            <img className="service-card-image" src={photo} alt="" />
            <div className="service-card-text-area">
                <div className="service-card-title-container">
                    <h2 className="service-card-title">{title}</h2>
                    <LightButton text={"Agendar agora"}/>
                </div>
                <p className="service-card-paragraph">{paragraph}</p>
            </div>
        </div>
    )
}