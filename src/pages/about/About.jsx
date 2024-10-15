import { PageTitle } from "../../components/texts/Texts";
import { FounderProfile, Presentation, Sheduling } from "./components";

import "./about.scss";

export function About() {
    return (
        <main id="about-page">
            <PageTitle name="Sobre nós" />
            <FounderProfile />
            <Presentation />
            <Sheduling />
        </main>
    );
};