import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Carousel from "./components/services/carousel/Carousel";
import BeforeAfter from "./components/services/beforeafter/BeforeAfter";
import Localization from "./components/localization/Localization";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Carousel />
      <BeforeAfter />
      <Localization />
      <Contact />
    </>
  );
}

export default App;
