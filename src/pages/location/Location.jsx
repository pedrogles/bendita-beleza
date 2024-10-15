import { PageTitle } from "../../components/texts/Texts";
import { Map, MapData } from "./components";

import "./location.scss";

export default function Location() {
    return (
        <main id="location-page">
            <PageTitle name="Localização" />
            <Map />
            <MapData />
        </main>
    );
};