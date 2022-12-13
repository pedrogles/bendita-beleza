import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Carousel from "./components/carousel/Carousel";
import BeforeAfter from "./components/beforeafter/BeforeAfter";
import Localization from "./components/localization/Localization";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import NavbarFooter from "./components/navbarfooter/NavbarFooter";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <About />
      <Services />
      <Carousel />
      <BeforeAfter />
      <Localization />
      <Contact />
      <NavbarFooter />
    </>
  );
}

export default App;
