import '../../style/services/services.scss';
import { GoLinkExternal } from 'react-icons/go';

export default function Services() {
    return (
        <section id="services">
            <h3>Serviços</h3>
            <ul className='services-list-one'>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20corte%20de%20cabelo." target="_blank" rel="noopener noreferrer">
                        <p>Corte</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Escova." target="_blank" rel="noopener noreferrer">
                        <p>Escova</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Colora%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                        <p>Coloração</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Unhas." target="_blank" rel="noopener noreferrer">
                        <p>Unhas</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Selagem." target="_blank" rel="noopener noreferrer">
                        <p>Selagem</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Mechas." target="_blank" rel="noopener noreferrer">
                        <p>Mechas</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Botox." target="_blank" rel="noopener noreferrer">
                        <p>Botox Capilar</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
            </ul>
            <ul className='services-list-two'>
                <h4>Tratamentos</h4>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Nutri%C3%A7%C3%A3o%20Capilar." target="_blank" rel="noopener noreferrer">
                        <p>Nutrição</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Cauteriza%C3%A7%C3%A3o%20Capilar." target="_blank" rel="noopener noreferrer">
                        <p>Cauterização</p>
                        <GoLinkExternal className='link-icon'/>
                    </a>
                </li>
                <li><a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Hidrata%C3%A7%C3%A3o%20Capilar." target="_blank" rel="noopener noreferrer">
                        <p>Hidratação</p>
                        <GoLinkExternal className='link-icon'/>
                    </a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20no%20servi%C3%A7o%20de%20Reconstru%C3%A7%C3%A3o%20Capilar." target="_blank" rel="noopener noreferrer">
                        <p>Reconstrução</p>
                        <GoLinkExternal className='link-icon'/>
                    </a></li>
            </ul>
            <p className='services-direction'>Clique no serviço e seja automaticamente redirecionado(a) para uma conversa.</p>
        </section>
    )
};