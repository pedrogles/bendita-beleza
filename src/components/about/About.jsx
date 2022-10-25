import RV from '../../assets/about/RV2.jpeg';

import '../../style/about/about.scss';

function About() {
    return (
        <div id="about">
            <h3>Sobre</h3>
            <div className="elements">
                <div className='photo'>
                    <img src={RV} alt="Foto de Renata Victor." />
                    <p className='rv'>Renata Victor de Andrade</p>
                    <p>Founder</p>
                </div>
                <div className='text'>
                    <h2>Bendita Beleza</h2>
                    <p>O mercado da beleza em nossa capital vem se ampliando e se modernizando de forma muito rápida, produtos e aplicações estão constantemente se aperfeiçoando.</p>
                    <p>Iniciei meu aprendizado orientada por profissionais especializados a quem agradeço toda atenção dispensada. Alguns cursos de aperfeiçoamento e a vivência diária proporcionaram a criação do meu próprio espaço “BENDITA BELEZA”.</p>
                    <p>Atenção e satisfação passa ser o maior diferencial deste Espaço, Bendita seja a sua Beleza.</p>
                </div>
            </div>
            <p className='pbutton'>Para agendar seu horário:</p>
            <button>
                <a href="https://api.whatsapp.com/send?phone=5583988710551" rel="noreferrer" target="_blank" alt="Botão de encaminhamento Whatsapp">Clique aqui</a>
            </button>
        </div>
    )
};

export default About;