import { CarouselCard } from "./components";
import { BenditaBelezaLogo } from "../../components/benditaBelezaLogo/BenditaBelezaLogo";

import "./home.scss";

export function Home() {
    return (
        <main id="home-page">
            <CarouselCard/>
            <BenditaBelezaLogo image={false} />
        </main>
    );
};