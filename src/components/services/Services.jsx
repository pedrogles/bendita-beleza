import '../../style/services/services.scss';
import { services } from '../../servicesData';

export default function Services() {
    return (
        <section id="services">
            <h3>Serviços</h3>
            <div className='services-items'>
                <div className="item-corte">
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20corte%20de%20cabelo." className="corte" target="_blank" rel="noopener noreferrer">
                        <img src={services[0].img} alt="Icone Tesoura" />
                        <p>{services[0].name}</p>
                    </a>
                </div>
                <a
                className="item-escova"  
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Escova." 
                target="_blank" rel="noopener noreferrer">
                    <img src={services[1].img} alt="Ícone Escova" />
                    <p>{services[1].name}</p>
                </a>
                <a 
                className="item-coloracao"
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Colora%C3%A7%C3%A3o." 
                target="_blank" rel="noopener noreferrer">
                    <img src={services[2].img} alt="Ícone Coloração" />
                    <p>{services[2].name}</p>
                </a>
                <a 
                className="item-unhas"
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Unhas." target="_blank" rel="noopener noreferrer">
                    <img src={services[3].img} alt="Ícone Unhas" />
                    <p>{services[3].name}</p>
                </a>
                <a 
                className="item-selagem"
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Selagem." target="_blank" rel="noopener noreferrer">
                    <img src={services[4].img} alt="Ícone Selagem" />
                    <p>{services[4].name}</p>
                </a>
                <a 
                className="item-mechas"
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Mechas." target="_blank" rel="noopener noreferrer">
                    <img src={services[5].img} alt="Ícone Mechas" />
                    <p>{services[5].name}</p>
                </a>
                <a 
                className="item-botox"
                href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Botox." target="_blank" rel="noopener noreferrer">
                    <img src={services[6].img} alt="Ícone Botox" />
                    <p>{services[6].name}</p>
                </a>
                <div className="item-tratamentos">
                    <div className="tratamentos-title">
                        <h3>Tratamentos</h3>
                    </div>
                    <a 
                    className="item-nutricao"
                    href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Nutri%C3%A7%C3%A3o%20Capilar."  target="_blank" rel="noopener noreferrer" >
                        <img src={services[7].img} alt="Ícone Nutrição"/>
                        <p>{services[7].name}</p>
                    </a>
                    <a 
                    className="item-cauterizacao"
                    href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Cauteriza%C3%A7%C3%A3o%20Capilar."  target="_blank" rel="noopener noreferrer">
                        <img src={services[8].img} alt="Ícone Cauterização" />
                        <p>{services[8].name}</p>
                    </a>
                    <a 
                    className="item-hidratacao"
                    href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Hidrata%C3%A7%C3%A3o%20Capilar."  target="_blank" rel="noopener noreferrer">
                        <img src={services[9].img} alt="Ícone Hidratação" />
                        <p>{services[9].name}</p>
                    </a>
                    <a 
                    className="item-reconstrucao"
                    href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Reconstru%C3%A7%C3%A3o%20Capilar."  target="_blank" rel="noopener noreferrer">
                        <img src={services[10].img} alt="Ícone Reconstrução" />
                        <p>{services[10].name}</p>
                    </a>
                </div>
            </div>
            <p className='services-direction'>Clique no serviço que deseja<br></br> e seja redirecionado(a) <br></br>para uma conversa.</p>
        </section>
    )
};