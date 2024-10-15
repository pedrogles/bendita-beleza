import { Routes, Route } from "react-router-dom";

import { Home, About, Gallery, Location, Contacts, Services } from "../pages";

export function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/sobre" element={ <About/> }/>
            <Route exact path="/galeria" element={ <Gallery/> }/>
            <Route exact path="/servicos" element={ <Services/> }/>
            <Route exact path="/localizacao" element={ <Location/> }/>
            <Route exact path="/contatos" element={ <Contacts/> }/>
            <Route path="*" element={ <Home/> }/>
            {/* Criar página 404 */}
        </Routes>
    );
};