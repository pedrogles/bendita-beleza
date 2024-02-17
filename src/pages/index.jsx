import Home from "./home/Home";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import Services from "./services/Services";
import Location from "./location/Location";
import Contacts from "./contacts/Contacts";

export function HomePage() {
    return <Home />
}

export function AboutPage() {
    return <About />
}

export function GalleryPage() {
    return <Gallery />
}

export function ServicesPage() {
    return <Services />
}

export function LocationPage() {
    return <Location />
}

export function ContactsPage() {
    return <Contacts />
}