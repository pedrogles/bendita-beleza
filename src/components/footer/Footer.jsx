import "./footer.scss";

export default function Footer() {
    const date = new Date;
    return (
        <footer className="footer">
            <div className="footer-item">
                <h4 className="item-title">Onde o salão fica localizado?</h4>
                <p className="item-paragraph">Rua Carmelo Ruffo, 197, Jaguaribe, João Pessoa - Paraíba.</p>
                <p className="item-paragraph">Localizado ao lado do Instituto Federal de Educação da Paraíba - IFPB.</p>
            </div>
            <div className="footer-item">
                <h4 className="item-title">Qual o horário de funcionamento?</h4>
                <p className="item-paragraph">Terça a Sábado, das 09:00 às 18:00.</p>
            </div> 
            <div className="footer-item">
                <h4 className="item-title">Qual número para contato?</h4>
                <a className="item-anchor" href="tel:+558398871-0551">
                    (83) 98871-0551
                </a>
            </div>
            <div className="footer-item">
                <p className="item-paragraph">&copy; {date.getFullYear()} - Bendita Beleza - Renata Victor</p>
                <p className="item-paragraph-dev">Desenvolvido por
                    <a className="anchor-dev" href="https://portfolio-pedrogles.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Pedro Gabriel
                    </a>
                </p>
            </div>
        </footer>
    )
}