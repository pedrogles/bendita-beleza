import '../../style/contact/contact.scss';
import Logo from '../../assets/logo/BBFullColor.png';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

function Contact() {
    return (
        <section id='contact'>
            <div className='contact-image'>
                <img src={Logo} alt="Logo Bendita Beleza R.V Cabeleleira" />
                <div className='image-icons'>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551" rel="noreferrer" target="_blank" alt="Link para Whatsapp">
                        <AiOutlineWhatsApp />
                    </a>
                    <a href="mailto:renatarvcabelos@gmail.com" rel="noreferrer" target="_blank" alt="Link para Email">
                        <AiOutlineMail />
                    </a>
                    <a href="https://www.instagram.com/benditabelezarv/" rel="noreferrer" target="_blank" alt="Link para Instagram">
                        <AiOutlineInstagram />
                    </a>
                </div>
            </div>
            <div className='contact-whatsapp'>
                <div className='whatsapp-text'>
                    <h5>Prezando sempre por<br></br> <span>Sua melhor experiência!</span></h5>
                </div>
                <p>Para agendar seu horário ou tirar dúvidas</p>
                <button>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio." rel="noreferrer" target="_blank" alt="Link para Whatsapp">Clique aqui</a>
                </button>
            </div>
        </section>
    )
}

export default Contact;