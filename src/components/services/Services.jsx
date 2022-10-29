import '../../style/services/services.scss';
import { services } from '../../servicesData';

function Services() {
    return (
        <section id="services">
            <h3>Serviços</h3>
            <div className='items'>
                <div className="containerCorte">
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20corte%20de%20cabelo." className="corte" target="_blank" rel="noopener noreferrer">
                        <img src={services[0].img} alt="Icone Tesoura" />
                        <p>{services[0].name}</p>
                    </a>
                </div>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Escova." className="escova" target="_blank" rel="noopener noreferrer">
                    <img src={services[1].img} alt="Ícone Escova" />
                    <p>{services[1].name}</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Colora%C3%A7%C3%A3o." className="coloracao" target="_blank" rel="noopener noreferrer">
                    <img src={services[2].img} alt="Ícone Coloração" />
                    <p>{services[2].name}</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Unhas." className="unhas" target="_blank" rel="noopener noreferrer">
                    <img src={services[3].img} alt="Ícone Unhas" />
                    <p>{services[3].name}</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Selagem." className="selagem" target="_blank" rel="noopener noreferrer">
                    <img src={services[4].img} alt="Ícone Selagem" />
                    <p>{services[4].name}</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Mechas." className="mechas" target="_blank" rel="noopener noreferrer">
                    <img src={services[5].img} alt="Ícone Mechas" />
                    <p>{services[5].name}</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Botox." className="botox" target="_blank" rel="noopener noreferrer">
                    <img src={services[6].img} alt="Ícone Botox" />
                    <p>{services[6].name}</p>
                </a>
                <div className="tratamentos">
                    <div className="tratamentosTitle">
                        <h3>Tratamentos</h3>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Nutri%C3%A7%C3%A3o%20Capilar." className="nutricao" target="_blank" rel="noopener noreferrer" >
                        <img src={services[7].img} alt="Ícone Nutrição"/>
                        <p>{services[7].name}</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Cauteriza%C3%A7%C3%A3o%20Capilar." className="cauterizacao" target="_blank" rel="noopener noreferrer">
                        <img src={services[8].img} alt="Ícone Cauterização" />
                        <p>{services[8].name}</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Hidrata%C3%A7%C3%A3o%20Capilar." className="hidratacao" target="_blank" rel="noopener noreferrer">
                        <img src={services[9].img} alt="Ícone Hidratação" />
                        <p>{services[9].name}</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Reconstru%C3%A7%C3%A3o%20Capilar." className="reconstrucao" target="_blank" rel="noopener noreferrer">
                        <img src={services[10].img} alt="Ícone Reconstrução" />
                        <p>{services[10].name}</p>
                    </a>
                </div>
            </div>
            <p className='pservice'>Clique no serviço que deseja<br></br> e seja redirecionado(a) <br></br>para uma conversa.</p>
        </section>
    )
};

export default Services;