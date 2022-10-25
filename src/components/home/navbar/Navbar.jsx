import '../../../style/home/navbar/navbar.scss';
import RV from '../../../assets/logo/RVFullColor.png';

function Navbar() {
    return (
        <div id="navbar">
            <img className="RV2" src={RV} alt="Logo Renata Victor." />
            <nav className="elements">
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">Serviços</button>
                                <div className="dropdown-content">
                                    <a href="#services">Lista de serviços</a>
                                    <a href="#carousel">Fotos</a>
                                    <a href="#beforeAfter">Antes e depois</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="#localization">Localização</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
        </div>
    )
};

export default Navbar;