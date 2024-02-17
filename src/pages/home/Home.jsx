import { home_images } from "../../utils/images";
import { useEffect, useState } from "react";

import { HomePageCard } from "../../components/cards/homepagecard/HomePageCard";

import BenditaBelezaCabeleireira from "../../assets/logo/benditabelezacabeleireira.svg";

import "./home.scss";

export default function Home() {
    const [photo, setPhoto] = useState(home_images[0])
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const buttons = document.querySelectorAll(".circle-button");
        if(photo == home_images[0]){
            buttons[0].style.backgroundColor = "#cacaca";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "transparent";
        }
        else if(photo == home_images[1]){
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "#cacaca";
            buttons[2].style.backgroundColor = "transparent";
        }
        else if(photo == home_images[2]){
            buttons[0].style.backgroundColor = "transparent";
            buttons[1].style.backgroundColor = "transparent";
            buttons[2].style.backgroundColor = "#cacaca";
        }
        setReload(false)
    },[reload])
    const handle_change_image = (i) => {
        setPhoto(home_images[i]);
        setReload(true);
    }
    return (
        <main id="home-page">
            <HomePageCard photo={photo}/>
            <div className="home-page-card-buttons">
                <button className="circle-button" onClick={() => handle_change_image(0)}></button>
                <button className="circle-button" onClick={() => handle_change_image(1)}></button>
                <button className="circle-button" onClick={() => handle_change_image(2)}></button>
            </div>
            <img className="bendita-beleza-cabeleireira-logo" src={BenditaBelezaCabeleireira} alt="" />
        </main>
    )
}