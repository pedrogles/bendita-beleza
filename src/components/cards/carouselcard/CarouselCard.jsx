import { useEffect, useState } from "react";
import { DefaultButton } from "../../buttons/defaultbutton/DefaultButton";

import "./carouselcard.scss";

export function CarouselCard({ images }) {
    const [photo, setPhoto] = useState(images[0])
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const buttons = document.querySelectorAll(".circle-button");
        if(photo === images[0]){
            buttons[0].style.backgroundColor = "#cccccc";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "transparent";
        }
        else if(photo === images[1]){
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "#cccccc";
            buttons[2].style.backgroundColor = "transparent";
        }
        else if(photo === images[2]){
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "#cccccc";
        }
        setReload(false)
    },[reload])
    const handle_change_image = (i) => {
        setPhoto(images[i]);
        setReload(true);
    }
    // bug on 767px.
    return (
        <div className="carousel-card">
            <img className="carousel-card-photo" src={photo} alt="" />
            <div className="carousel-card-buttons">
                <button className="circle-button" onClick={() => handle_change_image(0)}></button>
                <button className="circle-button" onClick={() => handle_change_image(1)}></button>
                <button className="circle-button" onClick={() => handle_change_image(2)}></button>
            </div>
            <div className="carousel-card-text-area">
                <p className="carousel-card-text-area-paragraph">Sempre em busca de encontrar sua melhor versão.</p>
                <div className="carousel-card-button-area">
                    <p className="carousel-card-button-area-paragraph">Agende já seu horário</p>
                    <DefaultButton 
                        text={"Agendar Horário"} 
                        href={"https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio."}
                    />
                </div>
            </div>
        </div>
    )
}