import { PageTitle } from "../../components/texts/Texts";
import { DefaultButton } from '../../components/buttons/defaultbutton/DefaultButton';
import RenataVictor from "../../assets/images/renata-victor.svg";

import "./about.scss";

export default function About() {
    return (
        <main id="about-page">
            <PageTitle name="Sobre nós" />
            <div className="founder-container">
                <img className="founder-image" src={RenataVictor} alt="" />
                <div>
                    <p className="founder-name">Renata Victor de Andrade</p>
                    <p className="founder-description">Criadora</p>
                </div>
            </div>
            <div className="presentation">
                <p className="presentation-paragraph">O mercado da beleza em nossa capital vem se ampliando e se modernizando  de  forma muito rápida, produtos e aplicações estão constantemente se aperfeiçoando.</p>
                <p className="presentation-paragraph">Iniciei meu aprendizado orientada por profissionais especializados a quem agradeço toda atenção dispensada. Alguns cursos de aperfeiçoamento e a vivência diária proporcionaram a criação do meu próprio espaço “Bendita Beleza”.</p>
                <p className="presentation-paragraph">“Atenção e satisfação passa ser o maior diferencial deste Espaço”. <span className="underline">Bendita seja a sua Beleza!</span></p>
            </div>
            <div className="sheduling">
                <p className="sheduling-paragraph">Para agendar seu horário:</p>
                <DefaultButton text={"Agendar Horário"}/>
            </div>
        </main>
    )
}