import { ServicesCarousel } from "./components";
import { PageTitle, SubTitle } from "../../components/texts/Texts";
import { services, treatments } from "../../mocks/service";

import "./services.scss";

export function Services() {
    return (
        <main id="services-page">
            <PageTitle name="Serviços" />
            <ServicesCarousel services={services}/>
            <SubTitle name="Tratamentos" />
            <ServicesCarousel services={treatments}/>
        </main>
    );
};