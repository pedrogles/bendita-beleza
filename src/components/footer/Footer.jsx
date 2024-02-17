import "./footer.scss";

export default function Footer() {
    const date = new Date;
    return (
        <footer className="footer">
            <div className="footer-item">
                <h4 className="item-title">Onde o salão fica localizado?</h4>
                <p className="item-paragraph">Rua Professor Renato Carneiro da Cunha, jaguaribe, 172.</p>
                <p className="item-paragraph">Localizado ao lado do cruzamento com a Rua Primeiro de Maio.</p>
            </div>
            <div className="footer-item">
                <h4 className="item-title">Qual o horário de funcionamento?</h4>
                <p className="item-paragraph">Terça a Sábado, das 9h às 18h.</p>
            </div> 
            <div className="footer-item">
                <h4 className="item-title">Qual número para contato?</h4>
                <a className="item-anchor" href="tel:+558398871-0551">
                    (83) 98871-0551
                </a>
            </div>
            <div className="footer-item">
                <p className="item-paragraph">&copy; {date.getFullYear()} - Bendita Beleza - Renata Victor</p>
                <p className="item-paragraph">Desenvolvido por
                    <a className="item-anchor-dev" href="https://www.linkedin.com/in/pedrogles/" target="_blank" rel="noopener noreferrer">
                        Pedro Gabriel
                    </a>
                </p>
            </div>
        </footer>
    )
}