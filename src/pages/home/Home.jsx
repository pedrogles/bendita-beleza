import { home_images } from "../../utils/images";

import { CarouselCard } from "../../components/cards/carouselcard/CarouselCard";

import "./home.scss";

export default function Home() {
    return (
        <main id="home-page">
            <CarouselCard images={home_images}/>
            <h2 className="bendita-beleza-title">Bendita Beleza</h2>
            <p className="bendita-beleza-paragraph">Cabeleireira</p>
        </main>
    )
}