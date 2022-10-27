import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";

import RV from '../../assets/logo/RV.png';
import Photo from '../../assets/home/HomePhoto.png';

import '../../style/home/home.scss';

function Home() {
    return (
        <div id="home">
            <img className="RV" src={RV} alt="Logo Renata Victor." />
            <Navbar />
            <div className="imageContainer">
                <div className="text">
                    <h2>Sempre em busca de encontrar<br></br><span>Sua melhor versão</span>.</h2>
                    <div className="pButton">
                        <p>Para agendar seu horario</p>
                        <button>
                            <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio%20para%20o%20servi%C3%A7o..." rel="noreferrer" target="_blank" alt="Link para Whatsapp">Clique aqui.</a>
                        </button>
                    </div>
                </div>
                <img id="Photo" src={Photo} alt="Foto de Cliente." />
            </div>
            <Banner />
        </div>
    )
};

export default Home;