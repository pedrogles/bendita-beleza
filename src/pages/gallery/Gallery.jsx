import { PageTitle } from "../../components/texts/Texts";
import { GalleryCarousel, InstaRedirect } from './components';

import "./gallery.scss";

export function Gallery() {
    return (
        <main id="gallery-page">
            <PageTitle name="Galeria de Imagens" />
            <GalleryCarousel />
            <InstaRedirect />
        </main>
    );
};