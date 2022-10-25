import '../../style/services/services.scss';
import { services } from '../../servicesData';

function Services() {
    return (
        <div id="services">
            <h3>Serviços</h3>
            <div className='items'>
                <div className="containerCorte">
                    <div className="corte">
                        <img src={services[0].img} alt="Icone Tesoura" />
                        <p>{services[0].name}</p>
                    </div>
                </div>
                <div className="escova">
                    <img src={services[1].img} alt="Ícone Escova" />
                    <p>{services[1].name}</p>
                </div>
                <div className="coloracao">
                    <img src={services[2].img} alt="Ícone Coloração" />
                    <p>{services[2].name}</p>
                </div>
                <div className="unhas">
                    <img src={services[3].img} alt="Ícone Unhas" />
                    <p>{services[3].name}</p>
                </div>
                <div className="selagem">
                    <img src={services[4].img} alt="Ícone Selagem" />
                    <p>{services[4].name}</p>
                </div>
                <div className="mechas">
                    <img src={services[5].img} alt="Ícone Mechas" />
                    <p>{services[5].name}</p>
                </div>
                <div className="botox">
                    <img src={services[6].img} alt="Ícone Botox" />
                    <p>{services[6].name}</p>
                </div>
                <div className="tratamentos">
                    <div className="tratamentosTitle">
                        <h3>Tratamentos</h3>
                    </div>
                    <div className="nutricao">
                        <img src={services[7].img} alt="Ícone Nutrição"/>
                        <p>{services[7].name}</p>
                    </div>
                    <div className="cauterizacao">
                        <img src={services[8].img} alt="Ícone Cauterização" />
                        <p>{services[8].name}</p>
                    </div>
                    <div className="hidratacao">
                        <img src={services[9].img} alt="Ícone Hidratação" />
                        <p>{services[9].name}</p>
                    </div>
                    <div className="reconstrucao">
                        <img src={services[10].img} alt="Ícone Reconstrução" />
                        <p>{services[10].name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;