import "../../style/footer/footer.scss";

import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-items'>
                <div className='items-address'>
                    <h6>Onde o salão fica localizado?</h6>
                    <p>Rua Professor Renato Carneiro da Cunha, jaguaribe, 172.</p>
                    <p>Localizado ao lado do cruzamento com a Rua Primeiro de Maio.</p>
                </div>
                <div className='items-contact-hour'>
                    <div className='hour'>
                        <h6>Qual o horário de funcionamento?</h6>
                        <p>Terça a Sábado, das 9h às 18h.</p>
                    </div>
                    <div className='contact'>
                        <h6>Qual número para contato?</h6>
                        <a href="tel:+5583988710551">(83) 98871-0551</a>
                    </div>
                </div>
                <div className='items-social'>
                    <h6>Links:</h6>
                    <a href="mailto:renatarvcabelos@gmail.com" rel="noreferrer" target="_blank" alt="Link para Email">
                        <AiOutlineMail />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551" rel="noreferrer" target="_blank" alt="Link para Whatsapp">
                        <AiOutlineWhatsApp />
                    </a>
                    <a href="https://www.instagram.com/benditabelezarv/" rel="noreferrer" target="_blank" alt="Link para Instagram">
                        <AiOutlineInstagram />
                    </a>
                </div>
            </div>
            <div className='footer-dev'>
                <p>© 2022</p>
                <h6>Desenvolvido por <a href="https://www.linkedin.com/in/pedrogles/" target="_blank" rel="noopener noreferrer">Pedro Gabriel</a>.</h6>
            </div>
        </footer>
    )
}