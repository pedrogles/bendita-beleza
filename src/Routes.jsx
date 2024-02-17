import { Routes as Switch, Route } from "react-router-dom";

import { HomePage, AboutPage, GalleryPage, LocationPage, ContactsPage, ServicesPage } from "./pages/index";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" element={ <HomePage/> }/>
            <Route exact path="/sobre" element={ <AboutPage/> }/>
            <Route exact path="/galeria" element={ <GalleryPage/> }/>
            <Route exact path="/servicos" element={ <ServicesPage/> }/>
            <Route exact path="/localizacao" element={ <LocationPage/> }/>
            <Route exact path="/contatos" element={ <ContactsPage/> }/>
        </Switch>
    )
}