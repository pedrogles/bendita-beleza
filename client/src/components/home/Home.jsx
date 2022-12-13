import PhotoHome from '../../assets/home/HomePhoto.png';

import '../../style/home/home.scss';

export default function Home() {
    return (
        <section id="home">
            <div className="home-image">
                <div className="home-image-text">
                    <h2>Sempre em busca de encontrar<br></br><span>Sua melhor versão</span>.</h2>
                    <div className="home-image-text-scheduling">
                        <p>Para agendar seu horario</p>
                        <button className='home-image-text-scheduling-button'>
                            <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio." rel="noreferrer" target="_blank" alt="Link para Whatsapp">Clique aqui.</a>
                        </button>
                    </div>
                </div>
                <img className='home-image-photo' src={PhotoHome} alt="Foto de Cliente." />
            </div>
        </section>
    )
};