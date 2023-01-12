import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import BeforeAfter from "../../components/beforeafter/BeforeAfter";
import Carousel from "../../components/carousel/Carousel";
import Contact from "../../components/contact/Contact";
import Home from "../../components/home/Home";
import Localization from "../../components/localization/Localization";
import Services from "../../components/services/Services";

export default function HomePage() {
    return (
        <>
            <Home />
            <Banner />
            <About />
            <Services />
            <Carousel />
            <BeforeAfter />
            <Localization />
            <Contact />
        </>
    )
}