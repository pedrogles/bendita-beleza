import { BrowserRouter } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Routes from './Routes';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}
