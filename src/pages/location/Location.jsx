// import { useEffect } from "react";

import { PageTitle } from "../../components/texts/Texts";

import "./location.scss";

export default function Location() {
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
    return (
        <main id="location-page">
            <PageTitle name="Localização" />
            <div className="localization-page-iframe">
                {/* <div id="map"></div> */}
                <iframe className='iframe'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9266606295687!2d-34.87699712545589!3d-7.134479669976251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810918e1e95%3A0xd03c0c2a69698de2!2sRua%20Carmelo%20Ruffo%2C%20197%20-%20Jaguaribe%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058015-460!5e0!3m2!1spt-BR!2sbr!4v1708288239788!5m2!1spt-BR!2sbr" width="600px" height="450" loading="lazy" title='Localização do salão Bendita Beleza.'>
                </iframe>
                <div className='iframe-data'>
                    <p className="iframe-paragraph">Rua Carmelo Ruffo, 197 - Jaguaribe, João Pessoa - Paraíba.</p>
                    <p className="iframe-paragraph">Localizado ao lado do Instituto Federal de Educação da Paraíba - IFPB.</p>
                    <p className="iframe-paragraph">Horário de funcionamento: <span>Segunda a Sábado, das 09:00 às 18:00.</span></p>
                </div>
            </div>
        </main>
    )
}