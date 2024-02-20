import { home_images } from "../../utils/images";

import { CarouselCard } from "../../components/cards/carouselcard/CarouselCard";

import BenditaBelezaCabeleireira from "../../assets/logo/benditabelezacabeleireira.svg";

import "./home.scss";

export default function Home() {
    return (
        <main id="home-page">
            <CarouselCard images={home_images}/>
            <img className="bendita-beleza-cabeleireira-logo" src={BenditaBelezaCabeleireira} alt="" />
        </main>
    )
}