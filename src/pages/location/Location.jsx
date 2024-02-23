import { useState, useEffect } from "react";
import { PageTitle } from "../../components/texts/Texts";

import Loading from "../../components/loading/Loading";
import Map from "../../components/map/Map";

import "./location.scss";

export default function Location() {
    const [map, setMap] = useState(<Loading/>);
    // useEffect(() => {
    //     let map;
    //     async function initMap() {
    //         const { Map } = await google.maps.importLibrary("maps");
    
    //         map = new Map(document.getElementById("map"), {
    //             center: { lat: -7.1345168145075695, lng: -34.87426688525542 },
    //             zoom: 17,
    //         });
    //     };
    //     initMap();
    // })
    useEffect(() => {
        const loading = setTimeout(() => {
            setMap(<Map />)
        }, 4000);
        return () => clearTimeout(loading);
    })
    return (
        <main id="location-page">
            <PageTitle name="Localização" />
            <div className="localization-page-iframe">
                {/* <div id="map"></div> */}
                {map}
                <div className='iframe-data'>
                    <p className="iframe-paragraph">Rua Carmelo Ruffo, 197, Jaguaribe, João Pessoa - Paraíba.</p>
                    <p className="iframe-paragraph">Localizado ao lado do Instituto Federal de Educação da Paraíba - IFPB.</p>
                    <p className="iframe-paragraph">Horário de funcionamento: <span>Segunda a Sábado, das 09:00 às 18:00.</span></p>
                </div>
            </div>
        </main>
    )
}