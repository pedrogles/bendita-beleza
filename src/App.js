import Navbar from "./components/navbar/Navbar";
import NavbarFooter from "./components/navbarfooter/NavbarFooter";
import Footer from "./components/footer/Footer";

import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routers />
        <Footer />
        <NavbarFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
